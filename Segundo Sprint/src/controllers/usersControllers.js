const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const { error } = require('console');
//const usersFilePath = path.join(__dirname, '../data/users.json');
//let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const userModel = require('../models/User');
const { ResultWithContextImpl } = require('express-validator/src/chain');

const usersController = {
    register: (req, res) => {
        res.render('register')

    },
    procesarRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                old: req.body,
            })
        }
        let userInDB = userModel.findByField('email', req.body.email);

        if (userInDB) {
            res.render('register', {
                errors: {
                    email: { msg: 'Este email ya está registrado' }
                },
                old: req.body,
            })
        }

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file.filename,

        }
        userModel.create(userToCreate);
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
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2})
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