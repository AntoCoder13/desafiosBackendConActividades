//clase 06/12/23
const express = require('express')
const router = require('./router')

const app = express()

//si viene como json lo transforma en javascript
app.use(express.json())
app.use(express.static(process.cwd() + '/src/public'))

router(app)

module.exports = app