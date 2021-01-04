require('./config/config')
const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path')

const app = express();

// parse application/x-www-form-urlencoded - middleware
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json - middleware
app.use(bodyParser.json())

// habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')))

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