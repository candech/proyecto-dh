const express = require('express');
const router = express.Router();
const path = require('path');

/********** Controller Require  **********/
const productsApiController = require('../../controllers/APIs/productsApiController');

/********** LISTADO DE PRODUCTOS  **********/
router.get('/', productsApiController.products);
router.get('/:id', productsApiController.detail);



module.exports = router;