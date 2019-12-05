const express = require('express')
const app = express()
const path = require('path')
// const _ = require('underscore')
const api = require('./api')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use( '/', api )

const port = 8080
app.listen(port, function(){
    console.log(`this is listening on port ${port}`)
})