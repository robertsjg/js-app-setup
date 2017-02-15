Checklist -
Visual Studio Code - text editor
download EditorConfig Plugin
create .editorconfig file
npm - package manager
create package.json -> open integrated command line and run npm install
run a security check on packages at npm start(nsp check), to do this install the node security package globally
npm install -g nsp
nsp check
development web server setup using Express see buildScripts/srcServer.js
npm install localtunnel -g
transpile with Babel
bundling with ES6 modules & webpack
sourcemaps allows transpiled code to be debugged in browser
Linter is ESLint
Test Framework; Mocha
Test Assertions; Chai
Test Helpers; JSDOM
Test Runner; node
Test co-located with src code, Unit tests run on save
Continuous Integration with TravisCI
Bundle splitting with webpack (per page or by 3rd party library)
Cache busting with webpack md5 hash

Centralizing API calls -
allows for call configurtion, preload logic, error handling & mocking
* HTTP requests with Fetch - browser side (& polyfills where not supported)
* HTTP requests with Axios - browser & (node) server side (& polyfills where not supported)
Feature chart here -  http://andrewhfarmer.com/ajax-libraries/

Options -
Local web server: http-server,live-server, Express,budo, webpack dev server, 
browsersync
share wip servers:Localtunnel, ngrok, now,surge
automation tools: grunt, gulp, npm scripts
travis ci (Linux hosted) is easily integrated into a Github hosted repo (AppVeyor is a windows alternative)
error logging: TrackJS, Sentry, New Relic, Raygun
hosting on: api on heroku, static site on surge
 
Useful Info -
* ssh setup with git - https://help.github.com/articles/generating-an-ssh-key/
* visual studio code customization - https://code.visualstudio.com/docs/customization/userandworkspace
* visual studio code (cool) icons - https://github.com/robertohuertasm/vscode-icons
* node js projects & TravisCI - https://docs.travis-ci.com/user/languages/javascript-with-nodejs

Tips -
* Include an example app in starter kit 
* Put javascript in a js file (not inline) 
* Don't dynamically generate js, dynamically generate json, Configuration Object Pattern
* Organizing project folders by (business) features
* Extract logic into POJOs (no framework dependencies just language)

Install -
git clone  # into new-project-folder
rm -rf .git  # remove git
git init     # create new git repo
git commit -a -m 'first commit'
# create blank remote repo on host of choice
git remote add origin @new-remote-git-url
git push -u origin master  
npm run reinstall

### useful docker commands
 docker-machine start
 docker-compose up --build -d
 docker run -d -p 3000:3000 --name js_node_test javascript_starter-kit
 

