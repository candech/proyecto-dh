// ************ Require's ************
const express = require('express');
const path = require ('path');
const router = express.Router();
/********** Controller Require  **********/
const usersController = require('../controllers/usersControllers');
const multer = require('multer');
const { body, check } = require('express-validator');
/********** Controller Require  **********/
const guestMiddleware = require('../middleware/guestMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
       
        cb(null, path.join(__dirname, '../public/img/users'))
    }, filename: (req, file, cb) => {
        
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
});
const uploadFile = multer({storage});

//Validaciones
const validateRegisterForm = [
    body('firstName').notEmpty().withMessage('Debes ingresar un nombre válido'),
    body('lastName').notEmpty().withMessage('Debes ingresar un apeliido válido'),
    body('email').notEmpty().withMessage('Este campo es obligatorio').bail().isEmail().withMessage('Debes ingresar un email válido'),
    body('type').notEmpty().withMessage('Este campo es obligatorio'),
    body('password').notEmpty().withMessage('Este campo es obligatorio').isLength(8).withMessage('La contraseña debe contener al menos 8 caracteres'),
    body('avatar').custom((value, {req}) => {
        let file = req.file;
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

/********** registro  **********/
router.get('/register', guestMiddleware, usersController.register);
router.post('/register', uploadFile.single('avatar'), validateRegisterForm, usersController.procesarRegister);

/********** login **********/
router.get('/login',  guestMiddleware, usersController.login);
router.post('/login' , usersController.procesarLogin);
router.get('/profileUser', authMiddleware, usersController.profileUser);
router.get('/logout/', usersController.logout);






module.exports = router;