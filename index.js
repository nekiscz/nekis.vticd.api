const express = require('express');
const routes = require('./routes/api');

const app = express();

app.use('/api/v0', routes);

app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests on localhost:4000');
});

app.get('/', (req, res) => {
    res.end();
})