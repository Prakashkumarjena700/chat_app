const express = require('express');
const { User } = require('../models/user.model');

const usersRoute = express.Router()

usersRoute.post('/', async (req, res) => {
    try {
        const { name, email, password, pic } = req.body

        if (!name || !email || !password) {
            res.status(400);
            res.send("Please Enter all the Feilds")
        }

        const newuser = await new User(req.body)
        newuser.save()


        res.send('user register')




    } catch (err) {
        console.log(err)
        res.send('err')
    }
})

usersRoute.post('/login', async (req, res) => {
    try {
        res.send('here we will login user')
    } catch (err) {
        res.send(err)
        console.log('err')
    }
})

module.exports = {
    usersRoute
}