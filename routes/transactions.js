const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactions');

router.post('/', transactionController.createTransaction);
router.get('/:pk_transaction', transactionController.getTransaction);//get por transaccion especifica por pk_transaction
router.put('/:pk_transaction', transactionController.updateTransaction);
router.get('/', transactionController.getTransactionsByUser);//obtiene todas las transactiones de un usuario especifico por fk_user
module.exports = router;
