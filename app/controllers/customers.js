module.exports.getCustomers = function (req, res) {
  var collection = require('../config/db').db.collection('customers');
  collection.find({}).toArray(function(err, docs) {
    const articles = docs.map(doc => {return Object.assign({}, doc, {id: doc._id})});
    res.json(articles)
  });
};

module.exports.createCustomer = function (req, res) {
  const customer = {name, tags} = req.body.customer;

  var collection = require('../config/db').db.collection('customers');
  // Insert some documents
  collection.insertOne(customer, (err, result) => {
    if (err) {    return res.json({error: err})}
    return res.json(customer)
  })
}