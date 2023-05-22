const mongoose = require('mongoose')

const chatSchema = mongoose.Schema({
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    },
    groupeAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, {
    timestamps: true
})

const Chat = mongoose.model('chats', chatSchema)

module.exports = {
    Chat
}