var express = require('express');
var handlebars = require('hbs').handlebars;
var fs = require('fs');
var router = express.Router();
var App = require('@octokit').App


// login (how do I persist a user sesion?)
const app = new App({
  appId: 1130592,
  privateKey: PRIVATE_KEY,
});

// fetch template from repo

// render template with values

// attempt to create the repo with octokit

// send errors

router.get('/', function(req, res, next) {
    console.log(process.cwd())
    var template = handlebars.compile(fs.readFileSync('views/test.hbs','utf8'))
    console.log(template({title: "stinky", data: "farts"}))
});

module.exports = router;
