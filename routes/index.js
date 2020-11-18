var express = require('express');
var router = express.Router();
var remote = require("remote-file-size");
var request = require("request");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({})
});

router.get("/img/:url", function(req, res,next) {
  const url = Buffer.from(req.params.url, 'base64').toString();
  remote(url, function(err, o) {
    if(o > 10*1024*1024) {
      res.status(403).json({});
    } else {
      request({
        method: "GET",
        url: url,
        encoding: null
      }, function (error, response, body) {
        res.set({"Content-Type": response.headers["content-type"]});
        res.send(body);
      });
    }
  })
});

module.exports = router;
