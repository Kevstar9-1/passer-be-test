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
`);

module.exports = {
  postgresql
};
