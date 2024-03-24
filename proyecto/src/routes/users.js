// ************ Require's ************
const express = require('express');
const path = require ('path');
const router = express.Router();
/********** Controller Require  **********/
const usersController = require('../controllers/usersControllers');
/********** Controller Require  **********/
const guestMiddleware = require('../middleware/guestMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

const {uploadFileUsers} = require('../middleware/multerMiddleware')

//Validaciones
const {validateRegisterForm} = require('../middleware/validationUsers');
const {validateLoginForm} = require('../middleware/validationUsers')
router.get('/', usersController.list)
router.get('/detail/:id', usersController.detail)


/********** registro  **********/
router.get('/register', guestMiddleware, usersController.register);
router.post('/register', uploadFileUsers.single('avatar'), validateRegisterForm, usersController.procesarRegister);

/********** login **********/
router.get('/login',  guestMiddleware, usersController.login);
router.post('/login' , validateLoginForm, usersController.procesarLogin);
router.get('/profileUser', authMiddleware, usersController.profileUser);
router.get('/logout/', usersController.logout);


module.exports = router;