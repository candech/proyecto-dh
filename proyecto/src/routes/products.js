// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require("multer");
const userLoggedMiddleware = require("../middleware/userLoggedMiddleware")


/********** Controller Require  **********/
const productsController = require('../controllers/productsControllers');

const validateCreateForm = require('../middleware/validationProducts');
const {uploadFileProducts} = require('../middleware/multerMiddleware')



/********** LISTADO DE PRODUCTOS  **********/
router.get('/',userLoggedMiddleware,  productsController.products);


/********** CREACIÓN DE PRODUCTOS  **********/
router.get('/create', userLoggedMiddleware, productsController.create)
router.post('/', uploadFileProducts.single('image'), validateCreateForm, productsController.store)

/********** DETALLE DE PRODUCTO  **********/
router.get('/detail/:id',userLoggedMiddleware, productsController.detail)

/****** EDICIÓN DE PRODUCTOS  **********/
router.get('/edit/:id',userLoggedMiddleware, productsController.edit); 
router.put('/:id',  uploadFileProducts.single('image'), validateCreateForm, productsController.update);

/****** ELIMINACIÓN DE PRODUCTOS  **********/
router.delete('/:id', productsController.destroy)

/********** muestra el carrito  **********/
router.get('/productCart', productsController.productCart);

module.exports = router;