const express = require('express');
const login = express();

login.use((req,res,next) => {
    const {Authentication} = req.session;
    console.log(req.session);
    if(Authentication || (req.path === '/' && req.method === 'POST')){
        next();
    }else{
        res.status(404).json("Not Authenticated.");
    }
})

login.get('/',(req,res) => {
    res.json('You are in login module.');
})
login.post('/',(req,res) => {
    req.session.Authentication = req.body;
    console.log(req.session);
    res.json(req.body);
})

module.exports = login;