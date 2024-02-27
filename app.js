const express = require("express");
const app = express();
const path = require ("path");

const publicPath = path.resolve(__dirname, "./public")
app.use(express.static(publicPath));

app.listen(3002, () => {console.log("Servidor corriendo")})

app.get("/", function(req, res){ 
    res.sendFile(path.resolve("./views/home.html"))
});

app.get("/login", function(req, res){ 
    res.sendFile(path.resolve("./views/login.html"))
});

app.post("/login", function(req, res){ 
    res.sendFile(path.resolve("./views/home.html"))
});

app.get("/register", function(req, res){ 
    res.sendFile(path.resolve("./views/register.html"))
});

app.post("/register", function(req, res){ 
    res.sendFile(path.resolve("./views/home.html"))
});