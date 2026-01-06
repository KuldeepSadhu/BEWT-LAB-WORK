const express = require('express')
const User = require('../models/userSchema');
const { log } = require('node:console');

const app = express()

app.get('/', function (req, res) {
        res.send("Hello");
    })
app.post('/', async function (req, res) {
        const data =  new User(req.body) 
        await data.save()
        console.log(data)
        res.status(200).json(data)
    })

module.exports = app