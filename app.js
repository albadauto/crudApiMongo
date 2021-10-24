const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.SERVER_PORT || 3000
const mongoose = require('mongoose')
const News = require('./routes/News')

//CONFIG
app.use(express.urlencoded({extended:false}))
app.use(express.json())
//ROUTES
app.use('/news', News)
//DATABASE
mongoose.connect("mongodb://localhost/Api3", () => console.log("Database connected!"))
//SERVER
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
