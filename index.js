var express = require('express');
var db = require('./src/db');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://tranquil-tor-64128.herokuapp.com/questions');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

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

