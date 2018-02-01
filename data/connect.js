const
    mongoose = require('mongoose'),
    databaseConfig = require('../config/database.config');

function connectDatabase() {
    mongoose.connect(databaseConfig.mongoConnectionString);
    mongoose.Promise = global.Promise;
    mongoose.connection.once('open', () => {
        console.log('connection to database has been made...');
    }).on('error', (error) => {
        console.log(`connection error: ${error}`);
    });
}

module.exports = { connectDatabase };