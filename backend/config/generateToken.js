var jwt = require('jsonwebtoken');

const generatedToken = (id) => {
    return jwt.sign({ id }, 'chatapp', {
        expiresIn: "30d"
    })
}

module.exports = {
    generatedToken
}