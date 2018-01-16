var express = require('express');
var db = require('./src/db');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.route('/questions')
  .get(function (req, res) {
    db.getAllQuestions(function(questions){
      console.log(questions);
      res.json(questions);
     });
  })

app.route('/questions/:id')
.get(function (req, res) {
  var id = parseInt(req.params['id']);
  db.getQuestionByID(id,function(question){
    console.log(question);
    res.json(question);
   });
})
.post(function (req, res) {
  var id = parseInt(req.params['id']);
  db.newQuestion({'id':id,'name':'nami'},function(question){
    res.json(question);
  });
})
.put(function (req, res) {
  res.send('Update the book')
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

