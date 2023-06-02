const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    pic: { type: String, require: true, default: 'https://img.freepik.com/free-icon/user_318-875902.jpg' },
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = {
    User
}