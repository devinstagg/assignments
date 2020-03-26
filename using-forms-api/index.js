const express = require('express')
const app = express()
const port = 5000

app.use(express.json())
const users = require('./users.js')

app.post('/users', (req, res) => {
    const newUser = req.body
    const maxID = users.reduce((previousMaxID, user) => {
        return previousMaxID < user.id ? user.id : previousMaxID
    }, 0) 
    const newUserID = maxID + 1
    const newUserCreated = {
        id: newUserID,
        ...newUser
    }
    users.push(newUserCreated)
    res.send(newUserCreated)
})

app.get('/users/:id', (req, res) => {
    const id = Number.parseInt(req.params.id)
    const u = users.reduce((targetUser, user) => {
        return user.id === id ? user : targetUser

    }, {message: 'no customer exists in your database'})
    res.send(u)
})


app.put('/users/:id', (req, res) => {
    const updatedUser = req.body
    const userIndex = users.reduce((targetIndex, user, currentIndex) => {
        return user.id === updatedUser.id ? currentIndex : targetIndex
    }, -1)

    if (userIndex === -1) {
        res.sendStatus(404)
    }
    
    users[userIndex] = updatedUser

    res.sendStatus(204)
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))