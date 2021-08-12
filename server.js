const express = require('express');
const app = express();
const login = require('./route/Login');
const port = 4001;

app.use('/login',login);
app.get('/',(req,res) => {
    res.json("you are in the root folder");
})

app.listen(port, () => {
    console.log('server is listening on port ' + port);
});