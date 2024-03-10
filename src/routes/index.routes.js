const express = require("express");
const router = express.Router();
const rutasProductos = require("./productos.routes.js")
const indexController = require("../controllers/indexController.js")

router.get("/", indexController.goHome);
router.get("/login", indexController.goLogin);
router.post("/login", indexController.returnHome);
router.get("/register", indexController.goRegister);
router.post("/register", indexController.returnHome);
router.use("/productos", rutasProductos);

module.exports = router;