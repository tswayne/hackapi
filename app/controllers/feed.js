const search = require('../lib/search')
const mongo = require('mongodb');

module.exports.getFeed = function(req, res) {
  const id = new mongo.ObjectID(req.params.id);
  const collection = require('../config/db').db.collection('customers');
  collection.find({_id: id}).toArray(function(err, docs) {
    const customer = docs;
    const query = {tags: customer.tags};
    return search(query, (err, articles) => {
      if (err) {return res.json({error: err})}
      return res.json(articles)
    })
  });
}