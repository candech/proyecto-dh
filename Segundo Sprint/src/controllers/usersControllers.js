const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const usersFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

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
        res.render('login');
    },
    procesarLogin: (req, res) => {
        
    },


};

module.exports = usersController