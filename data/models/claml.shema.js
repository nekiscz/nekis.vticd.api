const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClamlSchema = new Schema({
    type: String,
    code: String,
    languages: { type: Array, default: ["en", "vn"] },
    department: String,
    meta: [{ name: String, value: String }],
    parent: String,
    children: { type: Array, default: [] },
    labels: {
        en: [{
            kind: String,
            label: [{
                text: String,
                type: String
            }]
        }]
    }
})

module.exports = mongoose.model('claml', ClamlSchema);