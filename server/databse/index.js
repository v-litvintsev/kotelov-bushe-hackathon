'use strict';

const mysql = require('mysql2');
const util = require('util');

const config = {
    host: '127.0.0.1',
    port: 3306,
    user: 'bushe',
    password: 'root',
    database: 'bushe',
    multipleStatements: true
}
const connection = mysql.createConnection(config);


const query = util.promisify(connection.query).bind(connection);

module.exports = {query, config, connection};
