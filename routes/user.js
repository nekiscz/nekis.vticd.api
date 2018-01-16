const express = require('express');
const router = express.Router({margeParams: true});
const root = require('../responses/root');

router.get('/', (req, res) => {
    res.send({type: 'GET', path: 'root'});
});

module.exports = router;