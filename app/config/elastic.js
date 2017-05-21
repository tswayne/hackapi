var elasticsearch = require('elasticsearch');

module.exports.setup = function(cb) {
  const client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
  });
  client.ping({
    requestTimeout: 1000
  }, function (error) {
    if (error) {
      console.trace('elasticsearch cluster is down!');
      return cb(err)
    } else {
      module.exports.client = client;
      cb();
    }
  });
}
