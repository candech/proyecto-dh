const { body, check } = require('express-validator');
const path = require('path');

const validateCreateForm = [
    body('name').notEmpty().isLength({ min: 5 }),
    body('price').notEmpty(),
    body('category').notEmpty().withMessage('debes elegir etc'),
    body('description').notEmpty().isLength({ min: 20 }),
    body('image').custom((value, {req}) => {
        let file = req.file;
        if (!file) {
          throw new Error('Debes subir una imagen');
        }
        let fileExtension = path.extname(file.originalname);
        let acceptedExtensions = ['.jpeg', '.jpg', '.png', '.gif'];
        if (!acceptedExtensions.includes(fileExtension)) {
          throw new Error(`El archivo debe ser una imagen con extensión ${acceptedExtensions.join(',')}`);
        }
        
        return true;
      })
]

module.exports = validateCreateForm;