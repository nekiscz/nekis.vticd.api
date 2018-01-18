const express = require('express');
const router = express.Router({margeParams: true});

router.get('/login/:provider', (req, res) => {
    res.send({type: 'GET', path: 'root' + req.path});
});

router.get('/logout', (req, res) => {
    res.send({type: 'GET', path: 'root' + req.path});
});

module.exports = router;