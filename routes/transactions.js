const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactions');

router.post('/', transactionController.createTransaction);
router.get('/:pk_transaction', transactionController.getTransaction);//Get por transaccion especifica por pk_transaction
router.put('/:pk_transaction', transactionController.updateTransaction);
module.exports = router;
