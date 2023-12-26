const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const usersController = {

    login: (req, res) =>{
        res.render ('login')
    },

    register: (req, res) =>{
        res.render ('register')
    },

};

module.exports = usersController