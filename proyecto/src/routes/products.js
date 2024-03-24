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
router.get('/create', productsController.create)
router.post('/', uploadFileProducts.single('image'), validateCreateForm, productsController.store)

/********** DETALLE DE PRODUCTO  **********/
router.get('/detail/:id', productsController.detail)

/****** EDICIÓN DE PRODUCTOS  **********/
router.get('/edit/:id', productsController.edit); 
router.put('/:id',  uploadFileProducts.single('image'), validateCreateForm, productsController.update);

/****** ELIMINACIÓN DE PRODUCTOS  **********/
router.delete('/:id', productsController.destroy)

/********** muestra el carrito  **********/
router.get('/productCart', productsController.productCart);

module.exports = router;