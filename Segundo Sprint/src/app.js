// ************ Require's ************
const express = require('express');
const path = require ('path');
const PORT = process.env.PORT || 3002;
const methodOverride =  require('method-override');
const createError = require('http-errors');
const bodyparser = require('body-parser');
const session = require('express-session');


// ************ express() ************
const app = express();

// ************ Middlewares ************
app.use(express.static(path.join(__dirname, 'public')));// Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false })); //capturar la info que se envia por post
app.use(express.json());
app.use(methodOverride('_method')); // Para poder pisar el method="POST" en el formulario por PUT y DELETE
//app.use(cookieParser());
//app.use(logger('dev'));
//app.use(seesion({secret: secret}))

// ************ Template Engin ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use('/user', express.static(path.resolve(__dirname, './views/user')));
app.use('/producto', express.static(path.resolve(__dirname, './views/producto')));

// ************ Route System require and use() ************
const mainRouter = require('./routes/main'); // Rutas main
const productsRouter = require('./routes/products'); // Rutas /products
const usersRouter = require('./routes/users'); //Rutas /users
var logMiddleware = require('./middleware/logMiddleware');

/* app.get('/users/', (req, res) => {
  res.redirect('/users/')
}); */

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use(logMiddleware);



// ************ error handler ************
/*app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.path = req.path;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });*/


// ************ Puerto ************
app.listen(PORT, () => {
    console.log(`Escuchando el puerto ${PORT}`);
});