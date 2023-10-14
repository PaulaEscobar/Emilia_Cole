const express = require("express");
let app = express();
const path = require("path");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"/views/index.html"));
})

app.use(express.static(path.join(__dirname,"public")));

app.listen(3000,() => {
    console.log("servidor 3000 corriendo");
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname,"/views/about.html"));
})

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname,"/views/contact.html"));
})

app.get("/music", (req, res) => {
    res.sendFile(path.join(__dirname,"/views/music.html"));
})
