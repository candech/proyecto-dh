const express = require("express");
const app = express();
const PORT = 3002;

app.use("/static", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
});

app.listen(PORT, () => {
    console.log("Escuchando al puerto " + PORT);
});