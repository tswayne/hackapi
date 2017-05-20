var express = require('express')
var app = express()
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser')
var url = 'mongodb://localhost:27017/myproject';
var jsonParser = bodyParser.json()
app.use(jsonParser)
MongoClient.connect(url, function(err, db) {
  console.log(err)
  console.log("Connected successfully to server");

  app.get('/articles', function (req, res) {
    var collection = db.collection('articles');
    collection.find({}).toArray(function(err, docs) {
      const articles = docs.map(doc => {return Object.assign({}, doc, {id: doc._id})});
      res.json(articles)
    });
  })

  app.post('/articles', function (req, res) {
    const articles = req.body.articles.map(article => {return {title, body, date, source} = article})
    var collection = db.collection('articles');
    // Insert some documents
    collection.insertMany(articles, (err, result) => {
      if (err) {    return res.json({error: err})}
      return res.json(articles)
    })
  })



  app.listen(8080, function () {
    console.log('Example app listening on port 8080!')



  })
});
