var express = require('express');

var app = express();

app.get('/', function(request, result) {
    result.send('Hello world');
});

app.post('/', function(request, result) {
    result.send('Received post verb');
});

app.put('/', function(request, result) {
    result.send('Received put verb');
});

app.delete('/', function(request, result) {
    result.send('Received delete verb');
});

var server = app.listen(3000, function(){

    var host = server.address().address;
    var port = server.address().port;

    console.log('Server listening on http://%s:%s', host, port);
});