const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const { error } = require('console');
const db = require('../database/models');
const path = require("path");
const fs = require("fs");
//const { ResultWithContextImpl } = require('express-validator/src/chain');

const usersController = {
    list: async(req, res)=>{
        try {
         let users = await db.Usuarios.findAll()
        return res.render('users',{users})   
         } catch (error) {
            res.send(error.message)
         }
    },
    detail: async(req,res)=>{
        try {
		let user = await db.Usuarios.findByPk(req.params.id)
        res.render('userDetail', {user});
		} catch (error) {
			res.send(error.message)
		}
    },
    register: async (req, res) => {
        try {
        const allType = await db.Tipos.findAll()
        return res.render('register', {allType})
        } catch (error) {
            res.send(error.message)
        }
    },
    procesarRegister: async (req, res) => {
        const allType = await db.Tipos.findAll()
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            const deletedFile = path.resolve(__dirname, "../public/img/users", req.file.filename)
				fs.unlinkSync(deletedFile)
            // aqui eliminar img si hay errores, buscar nombre de img en req y utilizar metodo fs.unliksync para eliminar img
            return res.render('register', {
                errors: resultValidation.mapped(),
                old: req.body,
                allType
            })
        }
        let userInDB = await db.Usuarios.findOne({
            where: {
                email: req.body.email
            }
        });
        
        if(userInDB){ 
            res.render('register', {
                errors: {
                    email: { msg: 'Este email ya está registrado' }
                },
                old: req.body,
                allType
            })
            return  
        }
        let userToCreate = {
            ...req.body,
            typeId: req.body.type,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file.filename,
            
        }
        db.Usuarios.create(userToCreate);
        
        return res.redirect('login');
        
    },
    login: (req, res) => {
        return res.render('login');
    },
    procesarLogin: async(req, res) => {
        let userInDB = await db.Usuarios.findOne({
            where: {
                email: req.body.email
            }
        });
        let userToLogin = userInDB;
        if (userToLogin) {
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password)
            if (isOkThePassword) {
                delete userToLogin.password
                req.session.userLogged = userToLogin;

                if (req.body.recordarUsuario) {
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2 })
                }
                return res.redirect('profileUser')

            }
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'las credenciales son invalidas'
                    }
                }
            })
        }
        return res.render('login', {
            errors: {
                email: {
                    msg: 'Lo siento, no pudimos encontrar este email'
                }
            }
        })
    },
    profileUser: (req, res) => {
        console.log(req.cookies.userEmail)
        res.render('profileUser', {
            user: req.session.userLogged
        });
    },
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/')
    },
}

module.exports = usersController;