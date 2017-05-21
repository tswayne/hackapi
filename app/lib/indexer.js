const async = require('async');

module.exports.index = function(docs, cb) {
  const client = require('../config/elastic').client;
  async.eachLimit(docs, 10, function(doc, callback) {
    client.create({
      index: 'skeet',
      type: 'articles',
      id: `${doc.id}`,
      body: doc
    }, function (error, response) {
      callback(error)
    });
  }, function(err) {
    if (err) {
      return cb(err)
    } else {
      return cb()
    }
  })
}