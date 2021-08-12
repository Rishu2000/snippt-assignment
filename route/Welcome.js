const express = require('express');
const welcome = express();

welcome.get('/', (req, res) => {
    res.json("Welcome module");
})

module.exports = welcome;