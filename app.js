const express = require('express');
const path = require('path');
const rootRouter = require('./routes/index');
const loginRouter = require('./routes/login');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

app.use('/', rootRouter);
app.use('/login', loginRouter);

app.listen(3000, () => {
    console.log("🚀 APP running at port 3000");
});
