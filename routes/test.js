var express = require('express');
var handlebars = require('hbs').handlebars;
var fs = require('fs');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log(process.cwd())
    var template = handlebars.compile(fs.readFileSync('views/test.hbs','utf8'))
    console.log(template({title: "stinky", data: "farts"}))
    res.status(200).send("OKAY!")
});

module.exports = router;
