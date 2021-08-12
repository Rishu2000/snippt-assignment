const express = require('express');
const app = express();
const port = 4001;

app.get('/',(req,res) => {
    res.json("you are in the root folder.");
})

app.listen(port, () => {
    console.log('server is listening on port ' + port);
});