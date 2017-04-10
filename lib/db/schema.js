var db = require('../dbUtils').getMongoDB();

var messageSchema = new db.Schema({
    text: String
});

var schema = {};
module.exports = schema;

schema.message = db.model('message', messageSchema);
