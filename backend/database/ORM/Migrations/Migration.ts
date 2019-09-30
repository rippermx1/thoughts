import { Sequelize } from 'sequelize';

export class Migration {
    private sequelize: Sequelize;
    constructor() {
        this.sequelize = new Sequelize('mysql://bad4211c8ee6f9:0e90d4a3@us-cdbr-iron-east-05.cleardb.net/heroku_56fff3edfe5f4c1');
    }
    async testConnection() {
        await this.sequelize.authenticate()
    }

}