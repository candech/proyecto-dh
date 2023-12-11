const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainControllers')
const multer = require('multer');

router.get('/', mainController.index)
router.get('/login', mainController.login)
router.get('/register', mainController.register)
router.get('/productCart', mainController.productCart)
router.get('/productDetail', mainController.productDetail)
router.get('/productCreate', mainController.productCreate)
router.get('/edit/:id/', mainController.edit); 
router.put('/:id', mainController.update);

module.exports = router;