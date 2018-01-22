var express = require('express');
var db = require('./src/db');
var bodyParser = require('body-parser');

var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.route('/')
  .get(function (req, res) {
    res.send('welcome to back-end of the Full Stack course / project 1');
  })

app.route('/questions')
  .get(function (req, res) {
    db.getAllDocs('questions',function(questions){
      console.log(questions);
      res.json(questions);
     });
  })


app.route('/questions/:id')
.get(function (req, res) {
  var id = parseInt(req.params['id']);
  db.getDocByID(id,'questions',function(question){
    res.json(question);
  });
})
.post(function (req, res) {
  console.log(req.body);
  db.newDocument(req.body,'questions',function(question){
    res.json(question);
  });
})
.put(function (req, res) {
  console.log(req.body);
  var id = parseInt(req.params['id']);
  db.newDocument(id,req.body,'questions',function(question){
    res.json(question);
  });
})

app.route('/answers')
  .get(function (req, res) {
    db.getAllDocs('answers',function(answers){
      console.log(answers);
      res.json(answers);
     });
  })

app.route('/answers/:id')
.get(function (req, res) {
  var id = parseInt(req.params['id']);
  db.getDocByID(id,'answers',function(question){
    res.json(question);
  });
})
.post(function (req, res) {
  console.log(req.body);
  db.newDocument(req.body,'answers',function(question){
    res.json(question);
  });
})
.put(function (req, res) {
  res.send('Update the book')
})


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
