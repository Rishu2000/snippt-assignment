const express = require('express');
const welcome = express();

const slotData = [];

welcome.get('/', (req, res) => {
    res.json(slotData);
})

welcome.post('/', (req, res) => {
    const {username,day,time} = req.body;
    if(!day || !time) {
        res.status(400).json({
            Success:false,
            Message:"Please enter both day and time"
        })
    }else{
        if(slotData.find(item => item.username === username && !item.permission)){
            res.status(406).json({
                Success:false,
                Message:"Let alumni grant you previous slot permission then after you can register new slot"
            })
        }else{
            const match = slotData.filter(item => item.username && !item.permission);
            if(match.length >= 2){
                res.status(401).json({
                    Success:false,
                    Message:"Each user can book up to 2 slots."
                })
            }else{
                slotData.push({username,day,time,permission:false});
                res.status(201).json({
                    Success:true,
                    Message:"Created"
                })
            }
        }
    }
})

welcome.post('/permission',(req,res) => {
    const {username,permission} = req.body;
    const user = slotData.find(item => item.username === username);
    console.log(req.body);
    user.permission = permission;
    res.json(permission);
})

module.exports = welcome;