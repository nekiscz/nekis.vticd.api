const
    mongoUrl = "localhost";
    mongoUser = "";
    mongoPassword = "";
    mongoDatabase = "vticd";
    mongoConnectionString = `mongodb://${mongoUrl}/${mongoDatabase}`;

module.exports = { mongoUrl, mongoUser, mongoPassword, mongoDatabase, mongoConnectionString };