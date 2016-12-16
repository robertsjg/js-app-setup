// this file not transpiled

// register Babel before tests run
require('babel-register')();

// so Mocha ignores css
require.extensions['.css'] = function(){};
