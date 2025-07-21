const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

router.get('/:pk_user', userController.getUser);
router.post('/', userController.createUser);
router.put('/:pk_user', userController.updateUser);
router.delete('/:pk_user', userController.deleteUser);

module.exports = router;
