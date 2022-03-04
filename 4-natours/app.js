const express = require('express');


const app = express();

app.get('/' , (req, res) =>{
res.status().json({message :'Hello from the server side !❤', app: 'Natours'});
});

app.post('/',(req,res) => {
    res.send('you can post this message to endpoint...')
})
const port = 3000;

app.listen(port , () =>{
    console.log('App running on port ${port}...')
});