const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const { error } = require('console');
const usersFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const userModel=require('../models/User')

const usersController = {
    register: (req, res) =>{
        res.render('register')
        
    },
    procesarRegister: (req, res) =>{
       const resultValidation = validationResult(req);
       
        if(resultValidation.errors.length > 0) {
             res.render('register', {
               errors: resultValidation.mapped(),
               old: req.body,
           })
          } else {
           const newUser = {id: users.length + 1, ...req.body, password: bcryptjs.hashSync(req.body.password, 10), avatar: req.file.filename};
           users.push(newUser);
           fs.writeFileSync(usersFilePath, JSON.stringify(users));
           res.send('completaste las verificaciones' )
       }
       
    },
    login: (req, res) =>{
        return res.render('login');
    },

    procesarLogin:(req,res)=>{
       const userToLogin=userModel.findByField('email',req.body.email);

       if(userToLogin){
        let isOkThePassword = bcryptjs.compareSync(req.body.password,userToLogin.password)
        if(isOkThePassword){
            delete userToLogin.password
            req.session.userLogged = userToLogin
            return res.redirect('/views/profileUser')
        }
        return res.render('login',{
            errors: {
                email: {
                    msg:'las credenciales son invalidas'
                }
            }
           })
       }
       return res.render('login',{
        errors: {
            email: {
                msg:'No se encuentra el email'
            }
        }
       })
    },
    profile:(req,res)=>{
        return res.render('/views/profileUser',{
            user:req.session.userLogged
        })
    }


    /*procesarLogin: (req, res) => {

        const userToLogin = users.findByField('email',req.body.email)
      

        if (userToLogin){
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password)
            if(isOkThePassword){
                req.session.userLogged=userToLogin
                return res.redirect('/views/profileUser')
            }
            return res.render('login',{
                errors:{
                    email:{
                        msg: 'las credenciales son invalidas'
                    }
                }
            })

        }
        return res.render('login',{
            errors:{
                email:{
                    msg: 'no se encuentra este email en nuestra base de datos'
                }
            }
        })
    },
 */
}

module.exports = usersController