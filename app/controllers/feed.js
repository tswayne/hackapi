module.exports.getFeed = function(req, res) {
  var collection = require('../config/db').db.collection('articles');
  collection.find({}).toArray(function(err, docs) {
    const articles = docs.map(doc => {return Object.assign({}, doc, {id: doc._id})});
    res.json(articles)
  });
}