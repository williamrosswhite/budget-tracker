const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mysql = require('mysql')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req,res) => {
    res.send({
        message: `Hello ${req.body.email} your user was registeredd`
    })
})

var getPoolConnection = require('./db-utilities/connection-pool');

getPoolConnection((err, connection) => {
    if(err) console.log(err)
    connection.query('Select * from users', (err, rows) => {
        if(!err) {
            console.log(rows)
        } else {
            console.log(err)
        }
    })
})

app.listen(process.env.PORT || 8081)
