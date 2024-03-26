const { body, check } = require('express-validator');
const path = require('path');
const { error } = require('console');

const validateRegisterForm = [
    body('firstName').notEmpty().isLength({ min: 2 }),
    body('lastName').notEmpty().isLength({ min: 2 }),
    body('email').notEmpty().bail().isEmail(),
    body('password').notEmpty().bail().isLength({ min: 8 }),
    body('avatar').custom((value, {req}) => {
        let file = req.file;
        if (!file) {
          throw new Error('Tienes que subir una imagen');
        }
        let fileExtension = path.extname(file.originalname);
        let acceptedExtensions = ['.jpeg', '.jpg', '.png', '.gif'];
        if (!acceptedExtensions.includes(fileExtension)) {
          throw new Error(`El archivo debe ser una imagen con extensión ${acceptedExtensions.join(',')}`);
        }
        
        return true;
      })
]

const validateLoginForm = [
  body('email').notEmpty().bail().isEmail(),
  body('password').notEmpty().bail(),
]
const validateEditForm = [
  body('firstName').notEmpty().isLength({ min: 2 }),
  body('lastName').notEmpty().isLength({ min: 2 }),
  body('email').notEmpty().bail().isEmail(),
  body('avatar').custom((value, {req}) => {
      let file = req.file;
      if (!file) {
        throw new Error('Tienes que subir una imagen');
      }
      let fileExtension = path.extname(file.originalname);
      let acceptedExtensions = ['.jpeg', '.jpg', '.png', '.gif'];
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(`El archivo debe ser una imagen con extensión ${acceptedExtensions.join(',')}`);
      }
      
      return true;
    })
]
module.exports = {validateRegisterForm, validateLoginForm, validateEditForm};