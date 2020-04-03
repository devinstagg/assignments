const express = require('express');
const router = express.Router();

const ejs = require('ejs')
const people = ['geddy', 'neil', 'alex']
const html = ejs.render('<%= people.join(", "); %>', { people: people })

/* GET Populations Page */
router.get('/', function (req, res, next) {
  res.send(html);
});

module.exports = router;