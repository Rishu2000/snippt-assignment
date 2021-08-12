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
            slotData.push({username,day,time,permission:false});
            res.status(201).json({
                Success:true,
                Message:"Created"
            })
        }
    }
})

module.exports = welcome;