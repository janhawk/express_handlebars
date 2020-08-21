const express = require('express');
const exphbs = require('express-handlebars');

const port = 3000;
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home', {
        hello: 'Bonjour',
    });
});


app.listen(port, () => {
    console.log(`Server satrted on port: ${port}`) // to confirme that server is started on that port
});