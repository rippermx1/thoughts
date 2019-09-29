"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./server/app");
const dev = {
    host: 'localhost',
    user: 'carlos',
    password: 'solrac',
    database: 'think'
};
const app = new app_1.App(dev);
app.listen();
app.getPosts();
