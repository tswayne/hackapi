const indexer = require('../lib/indexer')

module.exports.getArticles = function (req, res) {
  var collection = require('../config/db').db.collection('articles');
  collection.find({}).toArray(function(err, docs) {
    const articles = docs.map(doc => {return Object.assign({}, doc, {id: doc._id})});
    res.json(articles)
  });
};

module.exports.createArticles = function (req, res) {
  const articles = req.body.articles.map(article => {return {title, body, summary, date, source, tags} = article})
  var collection = require('../config/db').db.collection('articles');
  collection.insertMany(articles, (err, result) => {
    if (err) {    return res.json({error: err})}
    const articleDocs = articles.map(article => {
      return {
        id: article._id,
        title: article.title,
        body: article.body,
        summary: article.summary,
        date: article.date,
        source: article.source,
        tags: article.tags
      }
    })
    indexer.index(articleDocs, (eErr) => {
      if (err) {return res.json({error: eErr})}
      return res.json(articleDocs)
    })
  })
}