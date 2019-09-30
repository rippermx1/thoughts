"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./app/server");
const mysql = __importStar(require("mysql"));
const dev = {
    host: 'localhost',
    user: 'carlos',
    password: 'solrac',
    database: 'think'
};
const prod = {
    host: 'remotemysql.com',
    user: 'rAVxHcRMHR',
    password: 'CKXUY8BX8L',
    database: 'rAVxHcRMHR'
};
const heroku = 'mysql://bad4211c8ee6f9:0e90d4a3@us-cdbr-iron-east-05.cleardb.net/heroku_56fff3edfe5f4c1';
const server = new server_1.Server();
server.listen();
server.app.get('/post', (req, res) => {
    const raw = 'SELECT * FROM thoughts';
    const connection = mysql.createConnection(prod);
    connection.query(raw, (error, results, fields) => {
        if (error) {
            res.status(400).json({ data: [] });
            console.log(`query error: ${error.stack}`);
        }
        res.status(200).json({ data: results });
    });
    connection.end((err) => {
        if (err) {
            throw err;
        }
        console.log(`connection ${connection.threadId} close`);
    });
});
