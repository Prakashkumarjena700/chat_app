const express = require('express')

const usersRoute = express.Router()

usersRoute.post('/', async (req, res) => {
    try {

        res.send('here we will login user')
    } catch (err) {
        res.send('err')
    }
})

module.exports = {
    usersRoute
}