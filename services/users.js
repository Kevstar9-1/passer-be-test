const usersModel = require('../models/users');

/**
 * Get a specific user
 * @param {number} pk_user User id
 * @returns {{pk_user: 1, name: "Juan"}}
 */
const getUser = async (pk_user) => {
    try {
        return await usersModel.getUser(pk_user);
    } catch (e) {
        throw new Error(e.message);
    }
};

/**
 * Create a user
 * @param {number} pk_user User id
 * @param {string} name User name
 * @returns {{pk_user: 1, name: "Juan"}}
 */
const createUser = async (pk_user, name) => {
    try {
        return await usersModel.createUser(pk_user, name);
    } catch (e) {
        throw new Error(e.message);
    }
};

/**
 * Update a user
 * @param {number} pk_user
 * @param {string} name
 * @param {boolean} status
 * @returns {Object} updated user
 */
const updateUser = async (pk_user, name, status) => {
    try {
        return await usersModel.updateUser(pk_user, name, status);
    } catch (e) {
        throw new Error(e.message);
    }
};

/**
 * Delete a user (logical delete)
 */
const deleteUser = async (pk_user) => {
    try {
        return await usersModel.deleteUser(pk_user);
    } catch (e) {
        throw new Error(e.message);
    }
};

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
};
