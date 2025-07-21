const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

router.get('/:pk_user', userController.getUser);
router.post('/', userController.createUser);
router.put('/:pk_user', userController.updateUser);

module.exports = router;
