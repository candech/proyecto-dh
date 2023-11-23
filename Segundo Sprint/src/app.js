const express = require('express');
const app = express();
const path = require ('path');

const mainRoutes = require('./routes/main');

/*app.use("/static", express.static(__dirname + "/public"));*/
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', mainRoutes);

/*app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
});

app.get("/productDetail", (req, res) => {
    res.sendFile(__dirname + "/views/productDetail.html")
});

app.get("/productCart", (req, res) => {
    res.sendFile(__dirname + "/views/productCart.html")
});

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/views/register.html")
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/views/login.html")
});*/
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Escuchando el puerto ${PORT}`);
});