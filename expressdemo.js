const express = require('express');
const app = express();

// middleware is a special function use to call the static data like css file and image file too.
// first make folder of name public then add the image and css files
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send(__dirname + '/home.html');
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/home.html');
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
})

const port = 3000;
app.listen(port, () => {
  console.log(`App started on ${port}`);
})