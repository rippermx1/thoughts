import express, {Express} from 'express';
import * as mysql from 'mysql';
import IConfig from '../database/config';

export class App {
    public app: Express;
    public port: number;
    public env: IConfig;
    constructor(env: IConfig) {
        this.app = express();
        this.port = Number(process.env.PORT) || 3000;
        this.env = env;
    }
    public listen() {
        this.app.listen(this.port, () => {
            console.log(`app listening on port ${this.port}!`);
        });
    }
    public getPosts() {
        this.app.get('/post', (req, res) => {
            const raw = 'SELECT * FROM posts';
            const connection = mysql.createConnection(this.env);
            console.log(`connection ${connection.threadId} created`)
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
    }
}
