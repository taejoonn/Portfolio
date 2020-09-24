var app = require('./app');

let server;

server = app.listen(app.get('port'), function() {
    console.log('Server is running on port', app.get('port'), app.get('env'));
});
