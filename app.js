    // Require Express
const express = require('express');

    // We create our own server named app
    // Express server will be handling requests and responses
const app = express();

const port = 3000;

    // Make everything inside of public/ available
app.use(express.static('public'));

    // out first Route:
app.get('/home', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html');
})

    // route to about
app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
})

    // route to works
app.get('works', (request, response, next) => {
    response.sendFile(__dirname + '/views/works.html');
})

    // route to image
app.get('/photogallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/photogallery.html');
})

// Server Started
app.listen(port, () => console.log(`My first app listening on port ${port}`));