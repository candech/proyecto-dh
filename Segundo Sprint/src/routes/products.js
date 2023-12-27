// ************ Require's ************
const express = require('express');
const router = express.Router();

/********** Controller Require  **********/
const productsController = require('../controllers/productsControllers');
const uploadFile = require('../middleware/multer');

/********** muestra el carrito  **********/
router.get('/productCart', productsController.productCart);


/********** LISTADO DE PRODUCTOS  **********/
router.get('/products', productsController.index);

/********** CREACIÓN DE PRODUCTOS  **********/
router.get('/productCreate', productsController.productCreate)
router.post('/',uploadFile.single("image"),productsController.store)

/********** DETALLE DE PRODUCTO  **********/
router.get('/detail/:id?', productsController.productDetail)

/****** EDICIÓN DE PRODUCTOS  **********/
router.get('/edit/:id/', productsController.edit); 
router.put('/:id', productsController.update);

/****** ELIMINACIÓN DE PRODUCTOS  **********/
router.delete('/:id', productsController.destroy)

module.exports = router;