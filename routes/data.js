const express = require('express');
const router = express.Router({margeParams: true});
const fs = require('fs');
const transform = require('../data/transform');

router.get('/', (req, res) => {
    res.send({type: 'GET', path: 'root'});
});

router.post('/', (req, res) => {
    var tr = { class: req.body.claml.class.map((obj) => { 
        return transform.category(obj);
    })};

    fs.writeFile('./dev-data/transofmed.json', JSON.stringify(tr), (err) => {
        if (err) {
            return console.log(err);
        }
    });

    res.send({type: 'POST', path: 'root', done: true});
});

router.get('/:id', (req, res) => {
    res.send({type: 'GET', path: 'root + ' + req.path});
});

module.exports = router;