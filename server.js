'use strict';

let nunjucks  = require('nunjucks'),
    express   = require('express'),
    app       = express();

// Setup nun-jucks.
nunjucks.configure('views', {
    autoescape: true,
    tags: {
        blockStart: '<%',
        blockEnd: '%>',
        variableStart: '<$',
        variableEnd: '$>',
        commentStart: '<#',
        commentEnd: '#>'
    },
    express   : app
});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index.html');
});

let server = app.listen(8080, () => {
    let host = server.address().ip,
        port = server.address().port;
    console.log('Example app listening on port %s', port);
});