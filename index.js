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
  res.send('Messaging app "Messenger" welcome you!');
});

var messages = [
    {
        username: 'Sergey Brin',
        message: 'This app cannot be better!',
        date: 'Friday, 15:30',
        uuid: '0'
    },
    {
        username: 'Tim Cook',
        message: 'It could if it was on iPhone..',
        date: 'Friday, 15:46',
        uuid: '1'
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
        message: req.body.message,
        date: req.body.date,
        uuid: req.body.uuid
    });
    res.json(message);
});

// Activate the express server
app.listen(process.env.PORT || 3000, function () {
  console.log('Messaging app is working!');
});