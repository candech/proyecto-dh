const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const { error } = require('console');
const db = require('../database/models');
const path = require("path");
const fs = require("fs");

const usersController = {
    
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
        return res.render('register',)
        } catch (error) {
            res.send(error.message)
        }
    },
    procesarRegister: async (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            const deletedFile = path.resolve(__dirname, "../public/img/users", req.file.filename)
				fs.unlinkSync(deletedFile)
            return res.render('register', {
                errors: resultValidation.mapped(),
                old: req.body,
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
            })
            return  
        }
        let userToCreate = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            typeId: 2,
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
                return res.redirect('/')
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
        res.render('profileUser', {
            user: req.session.userLogged
        });
    },
    edit: async(req, res) => {
        try{
			const user = await db.Usuarios.findByPk(req.params.id);
            res.render('userEdit', {user})
        }catch(error){
            res.send(error.message)
        }
    },
    update: async(req, res) => {
		try {
            
		const userUpdate = {
                firstName: req.body.firstName,
				lastName: req.body.lastName,
				email: req.body.email,
                avatar: req.file.filename
			}
            console.log(req.file.filename)
        await db.Usuarios.update(userUpdate,
             {
				where: {
					id: req.params.id
				}
			})
			return res.redirect('/')
		} catch (error) {
			res.send(error.message)
		}
	},
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/')
    },
    destroy: async(req, res) => {
		let idUser = req.params.id;
		try {
			 await db.Usuarios.destroy({
				where:  {id: idUser} 
			 });
             req.session.destroy();
			 res.redirect('/')
		} catch (error) {
			res.send(error.message)
		}
	},
}

module.exports = usersController;