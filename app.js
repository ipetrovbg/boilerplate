const express 		= require('express');

const server 		= express();
const port 			= 8000;

/* static files */
server.use('/public', express.static(__dirname + '/public'));

/* routes */
const routes = {
	Users: require('./routes/users.js'),
	Products: require('./routes/products.js')
} 

/* users routes */
server.use('/api/v1/users', routes.Users);

/* products routes */
server.use('/api/v1/products', routes.Products);

/* sending public/index.html file for all unregistered routes */
server.get('/*', function(req, res){	
	console.log(`http://${req.hostname}:${port + req.url}`);
  	res.sendFile(__dirname + '/public/index.html');
});

/* listen on port */
server.listen(port, function() {
  console.log('server listening on port ' + port);
});