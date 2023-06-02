const express = require('express')
const dotenv = require('dotenv')
const { chats } = require('./data/data')
var cors = require('cors')
const { connection } = require('mongoose')
const { usersRoute } = require('./routes/user.routes')

const app = express()
app.use(express.json())
dotenv.config()

app.use(cors())

app.get('/', (req, res) => {
    res.send('Api is running')
})

app.get('/api/chat', (req, res) => {
    res.send(chats)
})

app.get('/api/chat/:id', (req, res) => {
    const singleChat = chats.find((c) => c._id === req.params.id)
    res.send(singleChat)
})


app.use('/users', usersRoute)

const PORT = process.env.port || 4000

app.listen(5000, async () => {
    try {
        await connection
        console.log('Connected to db')
    } catch (err) {
        console.log('Not connected to db')
    }
    console.log(`server is running at port ${PORT}`)
})