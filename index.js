// Bring in the nessesary dependencies
var express = require('express');
var parser = require('body-parser');
var cors = require('cors');

// Configure the express web server framework
var app = express();
app.use(parser.json());
app.use(cors());


// Define the API routes for uor application
app.get('/', function (req, res) {
  res.send('Hello World!');
});

var messages = [
    {
        username: 'User 1',
        message: 'Hello!'
    },
    {
        username: 'User 2',
        message: 'Hey everyone!'
    }
];

// Messaging
// get
// post

app.get('/messages', function (req, res)  {
    res.json(messages);
});

app.post('/messages', function (req, res)  {
    messages.push({ 
        username: req.body.username,
        message: req.body.message
    });
    res.json(message);
});

// Activate the express server
app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening!');
});