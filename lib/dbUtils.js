var config = require('config');
var mongoose = require('mongoose');

// define module
var dbUtils = {};
module.exports = dbUtils;

var mongoConf = config.get("mongo");
mongoose.connect(mongoConf.uri, mongoConf.options);

/**
 * Returns Mongo DB driver instance
 * @return {mongoose}
 */
dbUtils.getMongoDB = function(){
    return mongoose;
};
