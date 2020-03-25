const express = require('express')
const app = express()
const port = 5000

const users = require('./users.js')

app.post('/users', (req, res) => {
    res.send('A new user has been added' )
})

app.get('/users/:id', (req, res) => {
    if(user_id === user_id) {
        res.send('User exists in database')
    } else {
        res.send('This user does NOT exist')
    }
    
})


app.patch('/users/:id', (req, res) => {
    res.send('Password has been updated')
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))