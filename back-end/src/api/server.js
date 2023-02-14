const MYSQL = require('mysql2');
const app = require('./app');

const { production } = require('../database/config/config');

const port = process.env.PORT || 3001;
const mySQL = MYSQL.createConnection(production);

mySQL.connect((err) => {
if (err) return console.log(err);
console.log('connected DB');
});

app.listen(port);
console.log(`Api rodando na porta ${port}`);
