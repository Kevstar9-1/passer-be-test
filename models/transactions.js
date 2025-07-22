const { postgresql } = require('../databases/postgresql');

const createTransaction = (pk_transaction, fk_user, description, amount) => {
  try {
    const result = postgresql.public.one(`
      insert into transaction (pk_transaction, fk_user, description, amount)
      values (${pk_transaction}, ${fk_user}, '${description}', ${amount})
      returning *;
    `);
    return result;
  } catch (e) {
    throw new Error(e.message);
  }
};

const getTransaction = (pk_transaction) => {
  try {
    return postgresql.public.one(`
      SELECT * FROM transaction
      WHERE pk_transaction = ${pk_transaction}
    `);
  } catch (e) {
    throw new Error(e.message);
  }
};

const updateTransaction = (pk_transaction, fk_user, description, amount) => {
  try {
    return postgresql.public.one(`
      UPDATE transaction
      SET fk_user = ${fk_user},
          description = '${description}',
          amount = ${amount}
      WHERE pk_transaction = ${pk_transaction}
      RETURNING *;
    `);
  } catch (e) {
    throw new Error(e.message);
  }
};


module.exports = {
  createTransaction,
  getTransaction,
  updateTransaction
};
