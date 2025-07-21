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


module.exports = {
  createTransaction
};
