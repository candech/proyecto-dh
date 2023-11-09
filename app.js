const express = require("express");
const app = express();
const PORT = 3002;

app.use("/static", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
});

app.get("/productDetail", (req, res) => {
    res.sendFile(__dirname + "/views/productDetail.html")
});

app.get("/productCart", (req, res) => {
    res.sendFile(__dirname + "/views/productCart.html") /*Aquí poner el .html del carrito*/
});

app.listen(PORT, () => {
    console.log("Escuchando al puerto " + PORT);
});