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

module.exports = {
  createTransaction,
  getTransaction,
  updateTransaction
};
