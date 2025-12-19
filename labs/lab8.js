const { error } = require('console')
const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

data = {
  name:'Darshan',
  college:'Darshan',
  loco:'Rajkot',
}


app.get('/', (req, res) => {
  res.send(data)
})
app.get('/contact', (req, res) => {
  res.send('contact page!')
})
app.get('/about', (req, res) => {
  res.send('about page')
})
app.get('/profile', (req, res) => {
  res.send('profile page')
})
app.get('/edits', (req, res) => {
  fs.readFile('contact.txt','utf-8', (error,data) => {
    if (error) {
      res.send("error")
    }
    else {
      // res.send("data retrive succesfully :")
      r
      +es.send(data)
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
