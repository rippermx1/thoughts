"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql = __importStar(require("mysql"));
class App {
    constructor(env) {
        this.app = express_1.default();
        this.port = Number(process.env.PORT) || 3000;
        this.env = env;
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`app listening on port ${this.port}!`);
        });
    }
    getPosts() {
        this.app.get('/post', (req, res) => {
            const raw = 'SELECT * FROM posts';
            const connection = mysql.createConnection(this.env);
            console.log(`connection ${connection.threadId} created`);
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
    }
}
exports.App = App;
