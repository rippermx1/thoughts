"use strict";
exports.__esModule = true;
var Migration_1 = require("./Migrations/Migration");
var migration = new Migration_1.Migration();
console.log(migration.testConnection());
