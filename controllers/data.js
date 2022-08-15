const { response } = require('express');

const dataPost = (req, res = response) => {
  console.log(req.body);
  res.json({
    data: req.body
  });
};

module.exports = {
  dataPost
};
