var express = require('express');
var db = require('./src/db');

var app = express();

app.set('port', (process.env.PORT || 5000));


app.route('/quations')
  .get(function (req, res) {
    db.getAllQuetions(function(quetions){
      console.log(quetions);
      res.json(quetions);
     });
  })

app.route('/quations/:id')
.get(function (req, res) {
  var id = parseInt(req.params['id']);
  db.getQuetionByID(id,function(quetion){
    console.log(quetion);
    res.json(quetion);
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

