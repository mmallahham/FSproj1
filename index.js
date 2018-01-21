var express = require('express');
var db = require('./src/db');
var bodyParser = require('body-parser');

var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());


app.route('/')
  .get(function (req, res) {
    res.send('welcome to back-end of the Full Stack course / project 1');
  })

app.route('/questions')
  .get(function (req, res) {
    db.getAllQuestions(function(questions){
      console.log(questions);
      res.json(questions);
     });
  })
  .post(function (req, res) {
    console.log(req.body);

    var id = parseInt(req.params['id']);
    db.newQuestion(req.body,function(question){
      res.json(question);
    });
  })


app.route('/questions/:id')
.get(function (req, res) {
  var id = parseInt(req.params['id']);
  db.getQuestionByID(id,function(question){
    res.json(question);
  });
})
.put(function (req, res) {
  res.send('Update the book')
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

