var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/adgadfg', function (req, res) {
  res.send('Hagadfgy')
})

app.get('/', function (req, res) {
  res.send('ne')
})

app.listen (4000);


// dodati public folder u zadacu i staviti sve css i html do sad

//app.all ()   poziva sve metode

// app.use poziva sve middleware 


app.get('/createPeaple', function (req, res) {
  console.log('people')
})

// res.json koristimo u zadaci kod zadatka 2



//body-parser koristimo u zadaci

// express.urlencode 