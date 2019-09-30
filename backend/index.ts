import {Server} from './app/server';
import IConfig from './database/models/config.interface';
import * as mysql from "mysql";

const dev: IConfig = {
    host: 'localhost',
    user: 'carlos',
    password: 'solrac',
    database: 'think'
};

const prod: IConfig = {
    host: 'remotemysql.com',
    user: 'rAVxHcRMHR',
    password: 'CKXUY8BX8L',
    database: 'rAVxHcRMHR'
};

const heroku = 'mysql://bad4211c8ee6f9:0e90d4a3@us-cdbr-iron-east-05.cleardb.net/heroku_56fff3edfe5f4c1';

const server = new Server();
server.listen();

server.app.get('/post', (req, res) => {
    const raw = 'SELECT * FROM thoughts';
    const connection = mysql.createConnection(prod);
    connection.query(raw, (error , results, fields) => {
        if (error) {
            res.status(400).json({data: []});
            console.log(`query error: ${error.stack}`);
        }
        res.status(200).json({data: results});
    });
    connection.end((err) => {
        if (err) { throw err; }
        console.log(`connection ${connection.threadId} close`);
    });
});