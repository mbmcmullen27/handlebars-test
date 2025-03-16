const express = require('express');
const handlebars = require('hbs').handlebars;
const fs = require('fs');
const router = express.Router();
import('octokit').then((github)=>{

    let App = github.App

    router.get('/', async function(req, res, next) {
        const app = new App({ appId:"1130592", privateKey: fs.readFileSync('fishbars-handle-app.2025-03-16.private-key.pem', 'utf-8')});
        const { data:{ slug:slug } } = await app.octokit.rest.apps.getAuthenticated();
        const octokit = await app.getInstallationOctokit(60391574);
        
        // fetch template from repo
        let response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
            owner: 'mbmcmullen27',
            repo: 'handlebars-test',
            path: 'views/test.hbs',
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          })

        let contents = new Buffer(response.data.content, 'base64').toString('ascii')
        console.log(contents)

        // render template with values
        let template = handlebars.compile(contents)
        let render = template({title: "stinky", data: "farts"})
        console.log(render)
        
        // attempt to create the repo with octokit
    
        // send errors
        console.log(slug)

        await octokit.rest.issues.create({
            owner: "mbmcmullen27",
            repo: "handlebars-test",
            title: "Hello world from " + slug,
            body: render
        });

        console.log(
            await octokit.rest.repos.get({
                owner: 'mbmcmullen27',
                repo: 'handlebars-test',
            })
        )

        res.send("WHATEVER!")
    });

})

module.exports = router;
