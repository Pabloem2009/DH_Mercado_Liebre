const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3002
const rutasIndex = require("./routes/index.routes.js")

app.listen(port, () => console.log(`http://localhost:${port}`));
app.use(express.static("public"));

app.use("/", rutasIndex);

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname,"views"));






