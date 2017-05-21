var express = require('express')
var app = express();
var bodyParser = require('body-parser');
const db = require('./app/config/db');
const router = require('./app/config/router');
var jsonParser = bodyParser.json({limit: '50mb'});


db.setup(err => {
  if (err) { throw err; }
  require('./app/config/elastic').setup(elasticError => {
    if (elasticError) { throw elasticError; }
    app.use(jsonParser)
    app.use(router)

    app.listen(8080, function () {
      console.log('App listening on port 8080!')
    })
  })

})
