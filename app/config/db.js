var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/myproject';

module.exports.setup = (cb) => {
  MongoClient.connect(url, function(err, db) {
    if (err) {return cb(err);}
    module.exports.db = db;
    return cb();
  })
}