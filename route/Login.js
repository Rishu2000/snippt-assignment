const express = require('express');
const login = express();

login.get('/',(req,res) => {
    res.json('You are in login module.');
})
login.post('/',(req,res) => {
    res.json(req.body);
})

module.exports = login;