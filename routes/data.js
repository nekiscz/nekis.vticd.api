const express = require('express');
const router = express.Router({margeParams: true});
const fs = require('fs');
const transform = require('../data/transform');
const claml = require('../data/claml');

router.get('/', (req, res) => {
    res.send({type: 'GET', path: 'root'});
});

router.post('/', (req, res) => {
    var tr = req.body.claml.class.map((obj) => { 
        const temp = transform.clamlItem(obj);
        console.log(temp);
        return claml.createRecord(temp).then();
    });

    res.send({type: 'POST', path: 'root', done: true, payload: "Done muthafaka."});
});

router.get('/:id', (req, res) => {
    res.send({type: 'GET', path: 'root + ' + req.path});
});

module.exports = router;