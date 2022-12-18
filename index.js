const express = require("express");
const path = require("path");
const ejs = require('ejs')

// const axios = require('axios');

// axios.get('https://api.unsplash.com/photos?page=2').then( (res) => {
//     console.log(res);
// })

// cep.addEventListener("blur", (e) => {
//     let search = cep.value.replace("-", "")
//     const options = {
//         method: "GET",
//         mode: "cors",
//         cache: "default"
//     }
//     fetch(`https://viacep.com.br/ws/${search}/json/`, options).then(response => {
//         response.json().then(data => showData(data))
//     }).catch(e => console.log(`Deu Erro: ${e, message}`))
// })

const app = new express();
app.set('view engine','ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render("index")
})

app.listen(3000, () => {
    console.log(`App listening on port 3000`);
})