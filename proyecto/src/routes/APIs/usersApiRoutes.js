const express = require('express');
const path = require ('path');
const router = express.Router();
/********** Controller Require  **********/
const usersApiController = require('../../controllers/APIs/usersApiController')

router.get('/', usersApiController.list)
router.get('/:id', usersApiController.detail)


/********** registro  **********/

router.post('/register', usersApiController.register);

/********** login **********/
/* router.get('/login', usersApiController.login);
router.delete('/logout/', usersApiController.logout);
 */

module.exports = router;