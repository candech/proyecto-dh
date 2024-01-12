const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator');
const usersFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController = {

    login: (req, res) =>{
        res.render('login');
    },
    procesarLogin: (req, res) => {
        
    },

    register: (req, res) =>{
        res.render('register')
        
    },
    procesarRegister: (req, res) =>{
       let errors = validationResult(req);
       try{
        if(errors.isEmpty()){
            const newUser = {id: users.length + 1, ...req.body, avatar: req.file.filename};
            users.push(newUser);
            fs.writeFileSync(usersFilePath, JSON.stringify(users));
            res.redirect('/users' + req.body.id);
           } else{
            res.render('register', {errors: errors.array(), 
            old: req.body});
           }
       }catch(err){
        console.log(err)
       }
    }

};

module.exports = usersController