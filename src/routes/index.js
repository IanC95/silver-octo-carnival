const express = require('express');
const { indexGet } = require('../controllers/indexController');
const router = express.Router();

/* GET home page. */
router.get('/', indexGet);

module.exports = router;
