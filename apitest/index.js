const express = require('express')
const app = express()
const port = 4000
var colors = require('colors');


app.use(express.static('public'))
app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`.rainbow))
