// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require("multer");

/********** Controller Require  **********/
const productsController = require('../controllers/productsControllers');

const validateCreateForm = require('../middleware/validationProducts');
const {uploadFileProducts} = require('../middleware/multerMiddleware')


/********** LISTADO DE PRODUCTOS  **********/
router.get('/', productsController.products);


/********** CREACIÓN DE PRODUCTOS  **********/
router.get('/productCreate', productsController.create)
router.post('/', uploadFileProducts.single('image'), validateCreateForm, productsController.store)

/********** DETALLE DE PRODUCTO  **********/
router.get('/productDetail/:id', productsController.detail)

/****** EDICIÓN DE PRODUCTOS  **********/
router.get('/productEdit/:id', productsController.edit); 
router.put('/:id',  uploadFileProducts.single('image'), validateCreateForm, productsController.update);

/****** ELIMINACIÓN DE PRODUCTOS  **********/
router.get('/productDelete/:id', productsController.delete);
router.delete('/:id', productsController.destroy)

/********** muestra el carrito  **********/
router.get('/productCart', productsController.productCart);

module.exports = router;