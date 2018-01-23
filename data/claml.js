const ClamlSchema = require('./models/claml.shema')

function createRecord(obj) {
    var temp = new ClamlSchema(obj);
    return temp.save();
}

module.exports = { createRecord };