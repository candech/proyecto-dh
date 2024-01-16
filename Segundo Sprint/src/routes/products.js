// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require("multer");

/********** Controller Require  **********/
const productsController = require('../controllers/productsControllers');

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
       
        cb(null, path.join(__dirname, '../public/img/products'))
    }, filename: (req, file, cb) => {
        
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
  });
  const uploadFile = multer({storage});


/********** LISTADO DE PRODUCTOS  **********/
router.get('/', productsController.products);

/********** CREACIÓN DE PRODUCTOS  **********/
router.get('/productCreate', productsController.productCreate)
router.post('/', uploadFile.single('image'), productsController.productStore)

/********** DETALLE DE PRODUCTO  **********/
router.get('/productDetail/:id?', productsController.productDetail)

/****** EDICIÓN DE PRODUCTOS  **********/
router.get('/productEdit/:id', productsController.productEdit); 
router.put('/:id', productsController.productUpdate);

/****** ELIMINACIÓN DE PRODUCTOS  **********/
router.delete('/:id', productsController.productDestroy)

/********** muestra el carrito  **********/
router.get('/productCart', productsController.productCart);

module.exports = router;