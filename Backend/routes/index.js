var express = require('express');
var router = express.Router();

router.get('/date', (req, res) => {
  const date = new Date();
  res.json({ year: date.getFullYear() });
});

module.exports = router;
