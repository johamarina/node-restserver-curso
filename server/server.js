require('./config/config')
const express = require('express')
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded - middleware
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json - middleware
app.use(bodyParser.json())

app.use(require('./routes/index'))

mongoose.connect(process.env.URL_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err, res) => {
    if (err) throw err;
    console.log('Base de datos online');
});

app.listen(process.env.PORT, () => console.log('escuchando puerto: ', process.env.PORT))