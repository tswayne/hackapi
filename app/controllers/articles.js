module.exports.getArticles = function (req, res) {
  var collection = require('../config/db').db.collection('articles');
  collection.find({}).toArray(function(err, docs) {
    const articles = docs.map(doc => {return Object.assign({}, doc, {id: doc._id})});
    res.json(articles)
  });
};

module.exports.createArticles = function (req, res) {
  const articles = req.body.articles.map(article => {return {title, body, date, source, tags} = article})
  var collection = require('../config/db').db.collection('articles');
  // Insert some documents
  collection.insertMany(articles, (err, result) => {
    if (err) {    return res.json({error: err})}
    return res.json(articles)
  })
}