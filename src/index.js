const express = require('express');
const app = express();
const port = 3000;
let list = [];

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/users', function(req, res){
    res.json(list)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));