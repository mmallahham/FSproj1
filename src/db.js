
var MongoClient = require('mongodb').MongoClient;



var uri = process.env.PROD_MONGODB;

var db = function() {

  var getAllDocs = function(collectionName,callback){
    MongoClient.connect(uri, function(err, client) {
      throwError(err);
      var collection = client.db("quiz").collection(collectionName);
      collection.find({}).toArray(function(err, docs) {
        throwError(err);
        client.close();
        callback(docs);
      });
    });
  }

  var getDocByID = function(id,collectionName,callback){
    MongoClient.connect(uri, function(err, client) {
      throwError(err);
      var collection = client.db("quiz").collection(collectionName);
      collection.find({'id':id}).toArray(function(err, docs) {
        throwError(err);
        client.close();
        callback(docs);
      });
    });
  }


  var newDocument = function(newDoc,collectionName,callback){
    MongoClient.connect(uri, function(err, client) {
      throwError(err);
      console.log(collectionName);

      var collection = client.db("quiz").collection(collectionName);
      collection.insertMany(newDoc,function(err, doc) {
        throwError(err);
        console.log(doc);
        callback(doc);
      });
      client.close();
    });
  }

  var throwError = function(err){
    if(err)
      throw("Error getting data: "+err.message);
  };

  return{
    getAllDocs,
    getDocByID,
    newDocument
  }

}();

module.exports = db;
