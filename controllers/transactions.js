const transactionService = require('../services/transactions');

const createTransaction = async (req, res, next) => {
  const { pk_transaction, fk_user, description, amount } = req.body;

  try {
    console.log(req.body);
    const result = await transactionService.createTransaction(pk_transaction, fk_user, description, amount);
    res.status(201).json(result);
    next();
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ error: e.message });
  }
};

const getTransaction = async (req, res, next) => {
  const { pk_transaction } = req.params;

  try {
    const result = await transactionService.getTransaction(Number(pk_transaction));
    res.status(200).json(result);
    next();
  } catch (e) {
    console.error(e.message);
    res.status(404).json({ error: 'Transaction not found' });
  }
};
const updateTransaction = async (req, res, next) => {
  const { pk_transaction } = req.params;
  const { fk_user, description, amount } = req.body;

  try {
    const updated = await transactionService.updateTransaction(Number(pk_transaction), fk_user, description, amount);
    res.status(200).json(updated);
    next();
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ error: e.message });
  }
};



module.exports = {
  createTransaction,
  getTransaction,
  updateTransaction
};
