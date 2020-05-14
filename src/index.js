const express = require('express');
const app = express();
const path = require ('path');
const session = require('express-session');
const flash = require('connect-flash');

//Settings
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

//middlewares(procesar los datos para que el servidor los pueda entender)
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(session({

    secret: 'LlaveSecreta',
    saveUninitialized: false,
    resave: false,


}));

app.use(flash());

//variables globales
app.use((req, res, next) => {
    app.locals.message = req.flash('mensaje')
    next();

})
//routes
app.use(require('./routes/index'));

app.listen(3000);
console.log('Server on Port', 3000);