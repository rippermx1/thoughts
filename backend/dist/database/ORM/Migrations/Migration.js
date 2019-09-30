"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Migration {
    constructor() {
        this.sequelize = new sequelize_1.Sequelize('mysql://bad4211c8ee6f9:0e90d4a3@us-cdbr-iron-east-05.cleardb.net/heroku_56fff3edfe5f4c1');
    }
    async testConnection() {
        await this.sequelize.authenticate();
    }
}
exports.Migration = Migration;
