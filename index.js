const 
    express = require('express'),
    routes = require('./routes/api'),
    bodyParser = require('body-parser'),
    xmlParser = require('express-xml-bodyparser'),
    database = require('./data/connect');

database.connectDatabase();
const app = express();

app.use(bodyParser.json());
app.use(xmlParser({ mergeAttrs: true, explicitArray: false}))

app.use('/api/v0', routes);
app.use((req, res) => {
    res.sendStatus(404);
});

app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests on localhost:4000');
});

app.get('/', (req, res) => {
    res.end();
})