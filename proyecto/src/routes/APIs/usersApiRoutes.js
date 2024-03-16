const express = require('express');
const path = require ('path');
const router = express.Router();
/********** Controller Require  **********/
const usersApiController = require('../../controllers/APIs/usersApiController')

router.get('/', usersApiController.list)
router.get('/:id', usersApiController.detail)

module.exports = router;