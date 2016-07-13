var express = require('express');
var hbs = require('express-hbs');
var app = express();

app.use(express.static('.'));
app.set('views', __dirname + '/pages');
app.set('view engine', 'html');
app.engine('html', hbs.express4({
	partialsDir: __dirname + '/pages/includes',
	defaultLayout: 'pages/layout.html',
	extname: '.html'
}));

app.get('*', function (req, res) {
	var page = req.url.replace('/', '');
	res.render(page);
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});