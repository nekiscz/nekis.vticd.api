const express = require('express');
const router = express.Router({margeParams: true});
const root = require('../responses/root');

router.get('/', (req, res) => {
    res.send({type: 'GET', path: 'root'});
});

router.get('/:id', (req, res) => {
    res.send({type: 'GET', path: 'root + ' + req.path});
});



module.exports = router;