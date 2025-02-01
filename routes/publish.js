var express = require('express');
var handlebars = require('hbs').handlebars;
var fs = require('fs');
var router = express.Router();
var App = require('octokit').App


// login (how do I persist a user sesion?)
// const app = new App({
//   appId: 1130592,
//   privateKey: fs.readFileSync('fishbars-handle-app.2025-02-01.private-key.pem', 'utf-8'),
// });


// fetch template from repo

// render template with values

// attempt to create the repo with octokit

// send errors
router.get('/', async function(req, res, next) {
    const app = new App({ appId:"1130592", privateKey: fs.readFileSync('fishbars-handle-app.2025-02-01.private-key.pem', 'utf-8')});
    const { data: slug } = await app.octokit.rest.apps.getAuthenticated();
    const octokit = await app.getInstallationOctokit(12360391574);
    // const octokit = await app.getInstallationOctokit(123);
    await octokit.rest.issues.create({
        owner: "mbmcmullen27",
        repo: "handlebars-test",
        title: "Hello world from " + slug,
    });
    // console.log(
    //     octokit.rest.repos.get({
    //         owner: 'mbmcmullen27',
    //         repo: 'handlebars-test',
    //     })
    // )
    res.send("WHATEVER!")
});

module.exports = router;
