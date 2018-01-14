var MongoClient = require('mongodb').MongoClient;

var uri = process.env.PROD_MONGODB;

var db = function() {

  var getAllQuetions = function(callback){
    MongoClient.connect(uri, function(err, client) {
      var collection = client.db("quiz").collection("books");
      collection.find({}).toArray(function(err, docs) {
        client.close();
        callback(docs);
      });
    });
  }

  var getQuetionByID = function(id,callback){
    MongoClient.connect(uri, function(err, client) {
      var collection = client.db("quiz").collection("books");
      collection.find({'id':id}).toArray(function(err, docs) {
        client.close();
        callback(docs);
      });
    });
  }

  return{
    getAllQuetions,
    getQuetionByID
  }

}();

module.exports = db;
