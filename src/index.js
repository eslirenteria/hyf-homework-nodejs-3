const express = require('express');
const app = express();
const port = 3000;
let users = [];

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/users', (req, res) => res.json(users));

app.get('/user/:id', (req, res) => {
    let user = users.find(user => user.id == req.params.id);
    res.json(user);
});

app.post('/user', (req, res) => {
    users.push({ id: 0 });
    res.json(users);
});

app.delete('/user/:id', (req, res) => {
    try{
        if(users){
            res.status(200).json({
                ok: true
            }) 
        }else{
            res.status(204).json({
                ok: true
            }) 
        }
    }catch(err){
        next(err);
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
