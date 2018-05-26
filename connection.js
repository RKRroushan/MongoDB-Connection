const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');//first of all you must install bluebird in your system :- npm install bluebird --save

// Connect to latest version mongoose mongodb
   const connect =  mongoose.connect('mongodb://localhost/testaroo',{
   useMongoClient: true,
   });
      // Connect to mongodb
    connect.then((db) => {
      console.log("Connected correctly to mongodb server");
    },(err) => { console.log(err);
    });
