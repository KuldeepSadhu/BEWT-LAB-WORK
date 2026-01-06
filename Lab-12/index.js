const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const bgg = require('./pages/User')
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/Lib-Demo').then(()=>{
    
    app.use('/user',bgg)
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

)