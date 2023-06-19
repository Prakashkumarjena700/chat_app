const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const auth = (req, res, next) => {
    try {
        console.log('auth middleware')
        console.log(req)
        next()
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    auth
}