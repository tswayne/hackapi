const async = require('async');

module.exports = function(query, cb) {
  const client = require('../config/elastic').client;
  const qstring = query.tags && query.tags.length > 0 ? query.tags.map( tag => {
    return  { "match": { "body": tag } }
  }) : [{ "wildcard" : { "body" : "*" } }]
  console.log(qstring)
  client.search({
    index: 'skeet',
    body: {
      "query": {
        "bool": {
          "should": qstring
        }
      }
    }
  }, function (error, response) {
      const articles = response.hits ? response.hits.hits.map(doc => {
        return doc._source
      }) : [];
    cb(error, articles)
  });
}