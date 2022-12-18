const express = require("express");
const path = require("path");
const ejs = require('ejs')

const app = new express();
app.set('view engine','ejs')

app.get('/index', (req, res) => {

    res.render("index")
})

app.listen(3000, () => {
    console.log(`App listening on port 3000`);
})