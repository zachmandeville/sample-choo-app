# sample-choo-app

This is really just a collection of notes.  I wanted to understand the basic architecture of a choo app better,
so I made one using create-choo-app, then I commented on each critical part of the code.

The comments I left are on store/clicks.js views/main.js and index.js.

If I got any part of this wrong, or am fundamentally misunderstanding it, please lemme know thru a pull request (if you'd like!)

commands for this app, if you wanna clone it down and try it out:

First, clone and install everything needed:
`https://github.com/zachmandeville/sample-choo-app.git`
enter the folder you just cloned:
`cd sample-choo-app`
Install all the dependencies (you'll need node, and npm.  node can be installed here: http://node.js.org/ npm here: npmjs.com)
`npm install`

then do yr thing with the following commands:

Command                | Description                                      |
-----------------------|--------------------------------------------------|
`$ npm start`          | Start the development server
`$ npm test`           | Lint, validate deps & run tests
`$ npm run build`      | Compile all files into `dist/`
`$ npm run create`     | Generate a scaffold file
`$ npm run inspect`    | Inspect the bundle's dependencies
