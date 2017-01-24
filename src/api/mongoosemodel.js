var mongoose = require('mongoose');
// example schema definition
var gooseSchema = mongoose.Schema({
    stringkey1: String,
    stringkey2: String,
    datekey1: { type: Date, default: Date.now },
    boolkey1: Boolean,
    numberkey1: Number,
    metakey1: {
        numberkey1: Number,
        stringkey1: String,
        arraykey1: [{ stringkey1: String, datekey1: Date }]
    }
});

module.exports = mongoose.model('ApiMongooseSchema', gooseSchema);