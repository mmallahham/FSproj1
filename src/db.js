var MongoClient = require('mongodb').MongoClient;



var uri = process.env.PROD_MONGODB;

var db = function() {

  var getAllQuestions = function(callback){
    MongoClient.connect(uri, function(err, client) {
      throwError(err);
      var collection = client.db("quiz").collection("questions");
      collection.find({}).toArray(function(err, docs) {
        throwError(err);
        client.close();
        callback(docs);
      });
    });
  }

  var getQuestionByID = function(id,callback){
    MongoClient.connect(uri, function(err, client) {
      throwError(err);
      var collection = client.db("quiz").collection("questions");
      collection.find({'id':id}).toArray(function(err, docs) {
        throwError(err);
        client.close();
        callback(docs);
      });
    });
  }


  var newQuestion = function(question,callback){
    MongoClient.connect(uri, function(err, client) {
      throwError(err);
      var collection = client.db("quiz").collection("questions");
      collection.insert(question,function(err, doc) {
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
    getAllQuestions,
    getQuestionByID,
    newQuestion
  }

}();

module.exports = db;
