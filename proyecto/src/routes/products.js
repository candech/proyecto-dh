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
router.get('/productCreate', productsController.create)
router.post('/', uploadFile.single('image'), productsController.store)

/********** DETALLE DE PRODUCTO  **********/
router.get('/productDetail/:id', productsController.detail)

/****** EDICIÓN DE PRODUCTOS  **********/
router.get('/productEdit/:id', productsController.edit); 
router.put('/:id',  uploadFile.single('image'), productsController.update);

/****** ELIMINACIÓN DE PRODUCTOS  **********/
router.get('/productDelete/:id', productsController.delete);
router.delete('/:id', productsController.destroy)

/********** muestra el carrito  **********/
router.get('/productCart', productsController.productCart);

module.exports = router;