const express = require('express');
const app = express();
const cors = require('cors');
const login = require('./route/Login');
const logout = require('./route/Logout');
const session = require('express-session');
const port = process.env.PORT ||4001;

app.use(cors());
app.use(session({
    secret: 'corona',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
  }))
app.use(express.json());
app.use('/login',login);
app.use('/logout',logout);
app.get('/',(req,res) => {
    res.json("you are in the root folder");
})

app.listen(port, () => {
    console.log('server is listening on port ' + port);
});