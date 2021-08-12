const express = require('express');
const logout = express();

logout.get('/',(req,res) => {
    req.session.destroy();
    res.json({
        success: true,
        Message: 'Successfully logged out'
    });
})

module.exports = logout;