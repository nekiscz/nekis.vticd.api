const express = require('express');
const mainRouter = express.Router();

mainRouter.use('/ninjas', require('./ninjas'));
mainRouter.use('/user', require('./user'));
mainRouter.use('/category', require('./category'));
mainRouter.use('/auth', require('./auth'))

module.exports = mainRouter;