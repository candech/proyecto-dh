const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainControllers')
const productsController = require('../controllers/productsControllers')
const multer = require('multer');

router.get('/', mainController.index)
router.get('/login', mainController.login)
router.get('/register', mainController.register)
router.get('/productCart', productsController.productCart)
//router.get('/productDetail', mainController.productDetail)

/********** LISTADO DE PRODUCTOS  **********/

/********** CREACIÓN DE PRODUCTOS  **********/
router.get('/products/create', productsController.productCreate)
router.post('products',)
/********** DETALLE DE PRODUCTO  **********/
router.get('/products/:id', productsController.productDetail)

/****** EDICIÓN DE PRODUCTOS  **********/
router.get('/edit/:id/', productsController.edit); 
router.put('/:id', productsController.update);

/****** ELIMINACIÓN DE PRODUCTOS  **********/



module.exports = router;