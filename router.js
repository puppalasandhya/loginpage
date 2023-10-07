var express = require("express");
var router = express.Router();

const credentials = {
    email: "admin@gmail.com",
    password: "admin123"
}


router.post("/login", (req, res) => {
    if (req.body.email == credentials.email && req.body.password == credentials.password) {
        req.session.user = req.body.email;
        res.redirect('/route/dashboard');
        //res.end("login successful");
    }
    else {
        res.end("invalid mesage");
    }
});

router.get("/dashboard", (req, res) => {
    if (req.session.user) {
        res.render("dashboard", { user: req.session.user })
    }
    else {
        res.send("unauthorized user");
    }
})

module.exports = router;