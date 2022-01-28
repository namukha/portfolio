const express = require('express');
const fs = require('fs')
const util = require('util')
const cors = require('cors')
const app = express();
app.use( '/static' , express.static('public'))


var corsOption = {
    origin: "*",
    optionSuccessStatus: 200
}

app.get('/name', cors(corsOption), function (req, res) {
    const readFile = util.promisify(fs.readFile);
    readFile('./data/data.json')
        .then((text) => {
            const data = JSON.parse(text.toString("utf8"));
            res.send(data.name)                      
        })
        .catch((err) => {console.log("Error", err);})
})

app.get('/age', function (req, res) {
    const readFile = util.promisify(fs.readFile);
    readFile('./data/data.json')
        .then((text) => {
            const data = JSON.parse(text.toString("utf8"));
            res.send(data.age)                      
        })
        .catch((err) => {console.log("Error", err);})
})

app.get('/major', function (req, res) {
    const readFile = util.promisify(fs.readFile);
    readFile('./data/data.json')
        .then((text) => {
            const data = JSON.parse(text.toString("utf8"));
            res.send(data.major)                      
        })
        .catch((err) => {console.log("Error", err);})
})

app.get('/profile', function (req, res) {
    const readFile = util.promisify(fs.readFile);
    readFile('./data/data.json')
        .then((text) => {
            const data = JSON.parse(text.toString("utf8"));
            res.send(data.profile)                      
        })
        .catch((err) => {console.log("Error", err);})
})

app.get('/description', function (req, res) {
    const readFile = util.promisify(fs.readFile);
    readFile('./data/data.json')
        .then((text) => {
            const data = JSON.parse(text.toString("utf8"));
            res.send(data.description)                      
        })
        .catch((err) => {console.log("Error", err);})
})



app.listen(3000)