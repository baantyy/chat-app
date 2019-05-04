const mongoose = require("mongoose")

const Schema = mongoose.Schema
const chatSchema = new Schema({
    from: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    message: {
        type: String,
        required: [true, 'Enter message']
    },
    sentAt: {
        type: Date,
        default: Date.now
    }
})

const Chat = mongoose.model("Chat",chatSchema)
module.exports = {
    Chat
}