const { postgresql } = require('../databases/postgresql')

/**
 * Get an specific user
 * @param {number} pk_user User primary key
 * @param {string} name User name
 * @returns {{pk_user: 1, name: "Juan"}}
 */

const createUser = (pk_user, name) => {
  try {
    const user = postgresql.public.one(`
      insert into users (pk_user, name, status)
      values (${pk_user}, '${name}', true)
      returning *;
    `);
    return user;
  } catch (e) {
    throw new Error(e);
  }
};

/**
 * Update an specific user
 * @param {number} pk_user User primary key
 * @param {string} name User name
 * @param {boolean} status User status
 * @returns {{pk_user: 1, name: "Juan", status: true}}
 */
const updateUser = (pk_user, name, status) => {
    try {
        const user = postgresql.public.one(`
            UPDATE users
            SET name = '${name}', status = ${status}
            WHERE pk_user = ${pk_user}
            RETURNING *;
        `);
        return user;
    } catch (e) {
        throw new Error(e);
    }
};


/**
 * Get an specific user
 * @param {number} pk_user User primary key
 * @returns {{pk_user: 1, name: "Juan"}} User schema
 */
const getUser = (pk_user) => {

    let user = postgresql.public.one(`select * from users where pk_user = '${pk_user}'`);
    return user
}

/**
 * Delete an specific user (logical delete)
 * @param {number} pk_user User primary key
 * @returns {{pk_user: number}} Deleted user ID
 */
const deleteUser = (pk_user) => {
    try {
        const result = postgresql.public.one(`
            UPDATE users
            SET status = false
            WHERE pk_user = ${pk_user}
            RETURNING pk_user;
        `);
        return result;
    } catch (e) {
        throw new Error(e);
    }
};

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser
}