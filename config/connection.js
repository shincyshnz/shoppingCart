const mongoClient = require('mongodb').MongoClient;
const 

module.exports.connect = function(done){
    const url = 'mongodb://localhost:27017';
    const dbname = 'shopping';

    mongoClient.connect(url, (err,data)=>{
        if(err) return done(err);
    });
}