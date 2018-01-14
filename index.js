var express = require('express');
var MongoClient = require('mongodb').MongoClient;

var app = express();

app.set('port', (process.env.PORT || 5000));


app.route('/quations')
  .get(function (req, res) {
    var uri = process.env.PROD_MONGODB;
    console.log(process.env);
    MongoClient.connect(uri, function(err, client) {
      var collection = client.db("quiz").collection("books");
      collection.find({}).toArray(function(err, docs) {
        console.log("Found the following records");
        console.log(docs);
        client.close();
        res.json(docs);
      });
    });
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

