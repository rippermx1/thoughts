import {App} from './server/app';
import IConfig from './database/config';

const dev: IConfig = {
    host: 'localhost',
    user: 'carlos',
    password: 'solrac',
    database: 'think'
};

const app = new App(dev);
app.listen();

app.getPosts();
