"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Migration_1 = require("./Migrations/Migration");
const migration = new Migration_1.Migration();
console.log(migration.testConnection());
