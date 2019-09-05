const mysql = require("mysql");
mysql.createConnection(process.env.DB_CONNECTION_STRING).connect();
