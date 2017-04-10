ABZ Chat
=========

A chat system

## Installation

  `npm i abz-chat -S`

## Setup chat

    * Create a folder name config in your root directory.
    * Create a file in config folder name default.json.
          {
                  "mongo" : {
                       "uri": "",
                       "options": {}
                   }
          }

    var chat = require('chat');
    chat.setup(server);


## Usage

    var chat = require('abz-chat');
    chat.setup(server);
    chat.init();


## Main Events

'message' is event for send message and receive message


## Tests

  `npm test`