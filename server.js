const express = require("express");
const path = require('path');
const bodyparser = require("body-parser");
const app = express();
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");

const router = require("./router");


const port = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({ extended: true }));


app.set('view engine', 'ejs');


//load static asserts
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/asserts', express.static(path.join(__dirname, 'public/asserts')))

app.use(session({
    secret: uuidv4(),//this session will save the files form user
    resave: false,
    saveUninitialized: true
}));

app.use('/route', router);


app.get("/", (req, res) => {
    res.render('base', { title: "login system" });
});

app.listen(port, () => { console.log("listening  to the server on http://localhost:3000 ") });

