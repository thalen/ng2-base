var Builder = require('jspm').Builder;
var builder = new Builder();

builder.buildStatic("app", "build/build.js", { rollup: true })
    .then(function() {
        console.log('Build complete');
    })
    .catch(function(err) {
        console.log(err);
    });
