const transactionModel = require('../models/transactions');

const createTransaction = async (pk_transaction, fk_user, description, amount) => {
  return await transactionModel.createTransaction(pk_transaction, fk_user, description, amount);
};
const getTransaction = async (pk_transaction) => {
  return await transactionModel.getTransaction(pk_transaction);
};

const updateTransaction = async (pk_transaction, fk_user, description, amount) => {
  return await transactionModel.updateTransaction(pk_transaction, fk_user, description, amount);
};

const getTransactionsByUser = async (fk_user) => {
  return await transactionModel.getTransactionsByUser(fk_user);
};

const getPaginatedTransactions = async (offset, limit) => {
  return await transactionModel.getPaginatedTransactions(offset, limit);
};

module.exports = {
  createTransaction,
  getTransaction,
  updateTransaction,
  getTransactionsByUser,
  getPaginatedTransactions
};
