const express = require('express');
const app = express();
const port = 3000;
let list = [];

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/users', (req, res) => res.json(list));
app.get('users/:id', (req, res) => {
    let user = list.find(userc => user.id == req.params.id);
    res.json(user);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));