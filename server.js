const express = require('express')
const bodyParser = require('body-parser')
const { postgresql } = require('./databases/postgresql');
const app = express()
const routes = require('./routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('App is working'))

app.use('/api', routes)

try {
  const result = postgresql.public.many(`SELECT * FROM transaction`);
  console.log('Transacciones encontradas:', result);
} catch (e) {
  console.error('Error al consultar la tabla transaction:', e.message);
}

app.listen(3000, () => console.log('Example app listening on port 3000!'))

module.exports = {
    app
}