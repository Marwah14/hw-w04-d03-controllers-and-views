var express = require('express');
var mustache = require('mustache-express');
var app = express();
var port = 3000;



app.set('view engine' , 'html');
app.engine('html',mustache());
app.set('views', __dirname + '/views');

var birdsControllers = require('./controllers/angrybirds');

app.get('/', function(request, response){
    response.render('./index',);
  })
  app.use('./angry_birds', birdsControllers);

  app.listen(port, function () {
    console.log(`App is listening on port ${port}`);
  })