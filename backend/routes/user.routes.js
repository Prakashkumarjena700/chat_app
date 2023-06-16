// const express = require('express');
// const { User } = require('../models/user.model');
// const { generatedToken } = require('../config/generateToken');


// const usersRoute = express.Router()

// usersRoute.post('/', async (req, res) => {
//     try {
//         const { name, email, password, pic } = req.body

//         let exitUser = await User.find({ email })

//         if (exitUser.length > 0) {
//             res.send('Already have an account please login')
//         } else {

//             if (!name || !email || !password) {
//                 res.send("Please Enter all the Feilds")
//             }

//             const newuser = await new User(req.body)
//             newuser.save()

//             const user = await User.find({ email })

//             let token = generatedToken(user[0]._id)

//             let respons = {
//                 user: user[0],
//                 token
//             }

//             res.send(respons)
//         }

//     } catch (err) {
//         console.log(err)
//         res.send('err')
//     }
// })

// usersRoute.post('/login', async (req, res) => {
//     try {
//         const { email, password } = req.body

//         const user = await User.find({ email })

//         let token = generatedToken(user._id)

//         if (user.length > 0) {
//             if (user[0].email === email && password === user[0].password) {
//                 res.send({ user, token })
//             } else {
//                 res.send('Wrong Crediential')
//             }
//         } else {
//             res.send('Wrong Crediential')
//         }

//     } catch (err) {
//         res.send(err)
//         console.log('err')
//     }
// })

// usersRoute.get('/', async (req, res) => {
//     try {
//         const keyword = req.query.search

//         console.log(keyword)
//         res.send(keyword)

//     } catch (err) {
//         console.log(err)
//     }
// })

// module.exports = {
//     usersRoute
// }