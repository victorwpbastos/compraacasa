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

app.get('/anuncie_seu_imovel', function (req, res) {
	res.render('anuncie_seu_imovel');
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});