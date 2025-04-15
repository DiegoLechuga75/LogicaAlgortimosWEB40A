const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Mi primer servidor con Express");
});

app.listen(8080, () => {
    console.log("El servidor esta corriendo en el puerto 8080");
})