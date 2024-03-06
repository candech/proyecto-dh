const { body, check } = require('express-validator');
const path = require('path');
const validateRegisterForm = [
    body('firstName').notEmpty().isLength({ min: 2 }),
    body('lastName').notEmpty().isLength({ min: 2 }),
    body('email').notEmpty().bail().isEmail(),
    body('type').notEmpty().isIn(['admin', 'customer']).withMessage('Debes elegir un rol'),
    body('password').notEmpty().bail().isLength({ min: 8 }),
    body('avatar').custom((value, {req}) => {
        let file = req.file;
        console.log('file ',file)
        if (!file) {
          throw new Error('Tienes que subir una imagen');
        }
        let fileExtension = path.extname(file.originalname);
        let acceptedExtensions = ['.jpeg', '.jpg', '.png', 'gif'];
        if (!acceptedExtensions.includes(fileExtension)) {
          throw new Error(`El archivo debe ser una imagen con extensión ${acceptedExtensions.join(',')}`);
        }
        
        return true;
      })
]

module.exports = validateRegisterForm;