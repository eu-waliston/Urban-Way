const express = require("express");
const app = new express();

app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render("index")
})

app.listen(3000, () => {
    console.log(`App listening on port 3000`);
})
