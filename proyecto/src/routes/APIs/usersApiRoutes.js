const express = require('express');
const path = require ('path');
const router = express.Router();
/********** Controller Require  **********/
const usersApiController = require('../controllers/usersApiController');
/********** Controller Require  **********/
const guestMiddleware = require('../middleware/guestMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

const {uploadFileUsers} = require('../middleware/multerMiddleware')

//Validaciones
const validateRegisterForm = require('../middleware/validationUsers');

router.get('/', usersApiController.users)
router.get('/userDetail/:id', usersApiController.detail)


/********** registro  **********/
router.get('/register', guestMiddleware, usersApiController.register);
router.post('/register', uploadFileUsers.single('avatar'), validateRegisterForm, usersApiController.procesarRegister);

/********** login **********/
router.get('/login',  guestMiddleware, usersApiController.login);
router.post('/login' , usersApiController.procesarLogin);
router.get('/profileUser', authMiddleware, usersApiController.profileUser);
router.get('/logout/', usersApiController.logout);


module.exports = router;