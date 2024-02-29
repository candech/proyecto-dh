const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const { error } = require('console');
const db = require('../database/models');

const { ResultWithContextImpl } = require('express-validator/src/chain');

const usersController = {
    users: async(req, res)=>{
        try {
            db.Usuarios.findAll()
            .then((user)=>{
                return res.render('users',{users: user})
            })
         } catch (error) {
            res.send(error.message)
         }
    },
    detail: async(req,res)=>{
        try {
			db.Usuarios.findByPk(req.params.id)
            .then(user => {
                res.render('userDetail', {user});
            });
		} catch (error) {
			res.send(error.message)
		}
    },
    register: async (req, res) => {
        try {
        const allType = await db.Tipos.findAll()
        return res.render('register', { allType })
        } catch (error) {
            res.send(error.message)
        }
    },
    procesarRegister: async (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                old: req.body,
            })
        }
        //let userInDB = db.Usuarios.findByField('email', req.body.email);
        let allUsers = await db.Usuarios.findAll()
        if (allUsers) {
            res.render('register', {
                errors: {
                    email: { msg: 'Este email ya está registrado' }
                },
                old: req.body,
            })
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
    procesarLogin: (req, res) => {
        let userToLogin = userModel.findByField('email', req.body.email);
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