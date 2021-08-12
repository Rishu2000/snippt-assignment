const express = require('express');
const login = express();
const database = require('../constants/Database');

login.use((req,res,next) => {
    const {Authentication} = req.session;
    if(Authentication || (req.path === '/' && req.method === 'POST')){
        next();
    }else{
        res.status(404).json("Not Authenticated.");
    }
})

login.get('/',(req,res) => {
    res.json({
        Message:'You are in login module.',
        Database:database
    });
})
login.post('/',(req,res) => {
    const {username,password} = req.body;
    if(!username || !password){
        req.session.destroy();
        res.status(400).json({
            Success:false,
            Message:"Please enter both username and password"
        });
    }else{
        if(!database[username]){
            req.session.destroy();
            res.status(401).json({
                Success:false,
                Message:"User not found."
            })
        }else{
            if(!(password === database[username])){
                req.session.destroy();
                res.status(400).json({
                    Success:false,
                    Message:"Please enter a valid password"
                })
            }else{
                req.session.Authentication = username;
                res.json({
                    Success:true,
                    Message:username
                });
            }
        }
    }
})

module.exports = login;