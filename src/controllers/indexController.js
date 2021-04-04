const { dataFunction } = require('../services/dataService');

module.exports.indexGet = (req, res, next) => {
  const data = dataFunction();
  data.title = 'Page Title';
  console.log(data);
  res.render('index', data);
};
