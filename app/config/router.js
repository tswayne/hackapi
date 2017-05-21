const express     = require('express');
const articles = require('../controllers/articles');
const customers = require('../controllers/customers');
const feed = require('../controllers/feed');
const search = require('../controllers/search');
const router = express.Router();

router.get('/articles', articles.getArticles);
router.post('/articles', articles.createArticles);
router.get('/customers', customers.getCustomers);
router.post('/customers', customers.createCustomer);
router.get('/feed/:customerId', feed.getFeed);
router.get('/search', search.search);

module.exports = router;