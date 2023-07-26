const mongoose = require('mongoose')

const schema = mongoose.Schema({
    sender : {
        type : mongoose.schema.Types.ObjectId,
        ref : "Users"
    },
    content : String,
    chat : {
        type :mongoose.Schema.Types.ObjectId,
        ref : "Chats"
    }
},
{
    timestamp : true
})
const messageCollection = mongoose.model('Messages', schema)

module.exports= messageCollection