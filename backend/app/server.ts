import express from 'express';

export class Server {
    public app: express.Application;
    public port: number;
    constructor() {
        this.app = express();
        this.port = Number(process.env.PORT) || 3000;
    }
    public listen() {
        this.app.listen(this.port, () => {
            console.log(`app listening on port ${this.port}!`);
        });
    }
}
