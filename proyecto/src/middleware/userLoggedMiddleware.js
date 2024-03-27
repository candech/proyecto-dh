const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const { error } = require('console');
const db = require('../database/models');
const path = require("path");
const fs = require("fs");

async function userLoggedMiddleware(req, res, next) {
    try {
       // Comprueba si hay un usuario en sesión
       if (req.session.userLogged) {
        // Obtiene el ID del usuario de la sesión
        const userId = req.session.userLogged.id;

        // Busca el usuario en la base de datos
        const user = await db.Tipos.findByPk(userId);

        if (user) {
            // Verifica el tipo de usuario
            if (user.id === 1) {
                res.locals.isAdmin = true; // Marca al usuario como administrador
            } else if (user.id === 2) {
                res.locals.isConsumer = true; // Marca al usuario como consumidor
            }
        }
        
        res.locals.isLogged = true; // Indica que hay un usuario loggeado
        res.locals.userLogged = req.session.userLogged; // Almacena los datos del usuario loggeado
    }
        
    } catch (error) {
        console.log(error.message)
    }

    next();
}

module.exports = userLoggedMiddleware;