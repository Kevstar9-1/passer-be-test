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

module.exports = {
  createTransaction
};
