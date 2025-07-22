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

const getTransactionsByUser = async (req, res) => {
  const { fk_user, page } = req.query;
  const PAGE_SIZE = 5;
  const currentPage = parseInt(page) || 1;
  const offset = (currentPage - 1) * PAGE_SIZE;

  try {
    if (fk_user) {
      const data = await transactionService.getTransactionsByUser(fk_user);
      return res.status(200).json(data);
    }

    const result = await transactionService.getPaginatedTransactions(offset, PAGE_SIZE);
    return res.status(200).json(result);
  } catch (e) {
    console.error(e.message);
    return res.status(500).json({ error: e.message });
  }
};


const getPaginatedTransactions = (req, res, next) => {
  const page = parseInt(req.query.page) || 1;

  if (!fk_user) {
    return res.status(400).json({ error: 'Missing fk_user query parameter' });
  }
  try {
    const result = transactionService.getPaginatedTransactions(page);
    res.status(200).json(result);
    next();
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ error: e.message });
  }
};

module.exports = {
  createTransaction,
  getTransaction,
  updateTransaction,
  getTransactionsByUser,
  getPaginatedTransactions
};
