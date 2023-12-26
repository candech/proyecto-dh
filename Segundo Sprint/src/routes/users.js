// ************ Require's ************
const express = require('express');
const router = express.Router();
/********** Controller Require  **********/
const usersController = require('../controllers/usersControllers')

/********** login y registro  **********/
router.get('/login', usersController.login);
router.get('/register', usersController.register);

module.exports = router;