const projectData = [];

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
const port = 3000;

// Setup Server
const server = app.listen(port,listening);
function listening(){
    console.log(`running on localhost: ${port}`);
}
//GET route
app.get('/all', getData);
function getData (request, response) {
    response.send(projectData);
}
// POST route
app.post('/addUserComment', addData)
function addData (req,res){
    projectData.push(req.body);
    res.send(projectData);
}

