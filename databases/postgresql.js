const { newDb } = require('pg-mem');

const postgresql = newDb();

postgresql.public.none(`
  create table if not exists users (
    pk_user integer primary key,
    name text,
    status boolean
  );

  insert into users (pk_user, name, status) values
  (123, 'Juan', true)
  on conflict (pk_user) do nothing;

  create table if not exists transaction (
    pk_transaction integer primary key,
    fk_user integer,
    description text,
    amount float
  );

  insert into transaction (pk_transaction, fk_user, description, amount) values
  (1, 123, 'Compra de libros', 45.75),
  (2, 123, 'Suscripción', 9.99)
  on conflict do nothing;
`);

module.exports = {
  postgresql
};
