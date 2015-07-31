var app = require('express')();

app.get('/', function(req, res){
	res.sendStatus(200);
})

app.listen(process.env.PORT || 3000, function(){
	console.log('Server is running on', process.env.PORT || 3000);
});