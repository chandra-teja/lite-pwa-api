const express = require("express");
const router = express.Router();
const controllers = require( "../controllers/info");

router.get('/',controllers.getAllUserdata);

router.get('/:mobileNumber',controllers.getUserdata);

router.post('/',controllers.createUserdata);

router.patch('/:id',controllers.updateUserdata);

router.put('/:id',controllers.updateUserdataPut);

module.exports = router;