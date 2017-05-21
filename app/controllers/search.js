module.exports.search = function(req, res) {
  const search = require('../lib/search')
  const tags = [];
  const query = {tags}
  return search(query, (err, articles) => {
    if (err) {return res.json({error: err})}
    return res.json(articles)
  })
}