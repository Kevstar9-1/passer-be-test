const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactions');

router.post('/', transactionController.createTransaction);
module.exports = router;
