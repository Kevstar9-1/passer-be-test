const users = require('../../services/users');
const { postgresql } = require('../../databases/postgresql');

describe('users main functions', () => {

    test('createUser with {pk_user: 5, name: "Carlos"}', async () => {
        let user = await users.createUser(5, "Carlos");
        expect(user.pk_user).toBe(5);
        expect(user.name).toBe("Carlos");
    });

    test('getUser with {pk_user: 123}', async () => {
        let user = await users.getUser(123);
        expect(user.pk_user).toBe(123);
    });

    test('updateUser with new name and status', async () => {
        const updated = await users.updateUser(123, 'Juan Actualizado', false);
        expect(updated.name).toBe('Juan Actualizado');
        expect(updated.status).toBe(false);
    });

    test('deleteUser should set status to false', async () => {
        await users.updateUser(123, 'Activo', true);
        const result = await users.deleteUser(123);
        expect(result).toMatchObject({ pk_user: 123 });
        const user = await users.getUser(123);
        expect(user.status).toBe(false);
    });

});
