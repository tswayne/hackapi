var express = require('express')
var app = express()
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/myproject';
MongoClient.connect(url, function(err, db) {
  console.log(err)
  console.log("Connected successfully to server");

  app.get('/raw-articles', function (req, res) {
    res.json({})
  })

  app.listen(8080, function () {
    console.log('Example app listening on port 8080!')



  })
});
