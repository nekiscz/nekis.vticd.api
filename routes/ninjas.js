const express = require('express');
const router = express.Router({margeParams: true});

router.get('/', (req, res) => {
    res.send({type: 'GET', path: 'root'});
});

router.get('/:id', (req, res) => {
    res.send({type: 'GET', path: req.params.id});
});

router.post('/', (req, res) => {
    res.send({type: 'POST'});
});

module.exports = router;