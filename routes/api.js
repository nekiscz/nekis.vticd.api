const express = require('express');
const mainRouter = express.Router();

mainRouter.use('/ninjas', require('./ninjas'));

module.exports = mainRouter;