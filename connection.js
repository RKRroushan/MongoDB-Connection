const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;//(optinal)this line you have to write only when your programm needs Promise

    // Connect to mongodb
    mongoose.connect('mongodb://localhost/testaroo');
    mongoose.connection.once('open', function(){
        console.log('Connection has been made, now make fireworks...');
    }).on('error', function(error){
        console.log('Connection error:', error);
    });

