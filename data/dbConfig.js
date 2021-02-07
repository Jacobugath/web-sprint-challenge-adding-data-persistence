const knex = require('knex');
const config = require('../knexfile.js');
const environment = process.env.NODE_ENV || "development";

let db;
if(process.env.NODE_ENV){
     db = knex(process.env.NODE_ENV);
}
else{
    db = knex("development");
}
module.exports = db;

