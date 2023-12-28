// ************ Require's ************
const express = require('express');
const router = express.Router();

/********** Controller Require  **********/
const productsController = require('../controllers/productsControllers');
const uploadFile = require('../middleware/multer');

/********** LISTADO DE PRODUCTOS  **********/
router.get('/productIndex', productsController.productIndex);

/********** CREACIÓN DE PRODUCTOS  **********/
router.get('/productCreate', productsController.productCreate)
router.post('/',uploadFile.single("image"),productsController.productStore)

/********** DETALLE DE PRODUCTO  **********/
router.get('/productDetail/:id?', productsController.productDetail)

/****** EDICIÓN DE PRODUCTOS  **********/
router.get('/productEdit/:id/', productsController.productEdit); 
router.put('/:id', productsController.productUpdate);

/****** ELIMINACIÓN DE PRODUCTOS  **********/
router.delete('/:id', productsController.productDestroy)

/********** muestra el carrito  **********/
router.get('/productCart', productsController.productCart);

module.exports = router;