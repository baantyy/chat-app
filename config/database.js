const mongoose = require("mongoose")
mongoose.Promise = global.Promise
// "mongodb://localhost:27017/chat-app"
// "mongodb://banty:qwe123@ds149706.mlab.com:49706/heroku_q9zqqjvz"
mongoose.connect("mongodb://banty:qwe123@ds149706.mlab.com:49706/heroku_q9zqqjvz",{
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(function(){
        console.log("DB is connected")
    })
    .catch(function(){
        console.log("DB is not connected")
    })
module.exports = {
    mongoose
}