var IO = require('socket.io');

// define module
var socket = {};
module.exports = socket;

//Socket io instance
var io = null;

/**
 * Initialize socket io for a given server instance
 * @param {http.Server} server - http server
 */
socket.setup = function(server){

    if (null == io) {
        io = IO(server);
    }
};

/**
 * Get socket io instance for given namespace.
 * @param {String} namespace - socket io namespace
 */
socket.getIO = function() {

    // validate
    if(null === io){
        throw new Error("IO not initialized, ensure setup is called atleast once");
    }

    return io;
};
