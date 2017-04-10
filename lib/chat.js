'use strict';

var db = require('./db/schema');

// define module
var chatNotifier = {};
module.exports = chatNotifier;

/**
 * Start chat namespace
 */
chatNotifier.init = function() {

    var sockets = require('./socket');

    var chat = sockets.getIO();

    //Event to handle new socket connection
    chat.on('connection', function(socket) {

        socket.on('message', function(data){
            db.message.insert({
                text: data
            });
            socket.emit('message', data);
        });
    });
};
