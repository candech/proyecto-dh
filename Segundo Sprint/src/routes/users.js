// ************ Require's ************
const express = require('express');
const router = express.Router();
/********** Controller Require  **********/
const usersController = require('../controllers/usersControllers')
const multer = require('multer');
const { body } = require('express-validator');

const storage =multer.diskStorage({
    destination:(req, file, cb) => {
       
        cb(null, path.join(__dirname, '../public/img/profileImages'))
    }, filename: (req, file, cb) => {
        console.log(file)
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
});
const upload = multer({storage});
//Validaciones
const validateCreateForm = [
    body('firstName').notEmpty().withMessage('Debes ingresar un nombre válido'),
    body('lastName').notEmpty().withMessage('Debes ingresar un apeliido válido'),
    body('email').notEmpty().withMessage('Debes ingresar un email válido'),
    body('admin').notEmpty().withMessage('Este campo es obligatorio'),
    body('costumer').notEmpty().withMessage('Este campo es obligatorio'),
    body('password').isEmail().withMessage('Este campo es obligatorio'),
    body('confirm-password').notEmpty().withMessage('Este campo es obligatorio'),
    body('avatar').notEmpty().withMessage('Este campo es obligatorio'),
]


/********** login **********/
router.get('/login', usersController.login);
router.post('/', usersController.procesarLogin);

/********** registro  **********/
router.get('/register', usersController.register);
router.post('/', upload.single('imagenUsuario'), validateCreateForm, usersController.procesarRegister);


module.exports = router;