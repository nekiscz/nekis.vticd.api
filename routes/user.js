const express = require('express');
const router = express.Router({margeParams: true});

router.get('/', (req, res) => {
    res.send({type: 'GET', path: 'root'});
});

module.exports = router;