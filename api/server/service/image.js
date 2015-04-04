//*** IMPORTANT ***//
//This route will handle 3 request
// 1) find question by Id (query string will have question id)
// 2) find question by Tag (query string will have tag)
// 3) find all questions (no query search string)
exports.getAll = function (req, res) {

    var MongoClient = require('mongodb').MongoClient;

    var mongodbUrl = 'mongodb://dockerdemo.aws.appacitive.com:27017/test';

    MongoClient.connect(mongodbUrl, function(err, db){
        var collection = db.collection('images')
        collection.find({}).toArray(function(error, docs){

            return res.json(docs);

            console.log(db)
            console.log("Connected correctly to server");
            db.close();
        });
    });  
};
