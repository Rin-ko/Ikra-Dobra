var serverFactory = require('spa-server');

var server = serverFactory.create({
    path: './',
    port: 8000,
    fallback: {
        'text/html' : 'index.html'
    }
});

server.start();