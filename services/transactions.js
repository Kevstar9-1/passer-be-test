const transactionModel = require('../models/transactions');

const createTransaction = async (pk_transaction, fk_user, description, amount) => {
  return await transactionModel.createTransaction(pk_transaction, fk_user, description, amount);
};

module.exports = {
  createTransaction
};
