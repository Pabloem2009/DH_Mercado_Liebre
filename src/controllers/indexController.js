const path = require("path");

const indexController = {
    goHome: function (req, res) {
        res.render("home")
    },
    goLogin: function (req, res) {
        res.render("login")
    },
    goRegister: function (req, res) {
        res.render("register")
    },
    returnHome: function (req, res) {
        res.render("home")
    },    
}

module.exports = indexController;