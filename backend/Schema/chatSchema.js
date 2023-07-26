const mongoose = require('mongoose')

const schema = mongoose.Schema({
    chatName : String,
    chatType : String,
    isGroupChat : Boolean,
    groupChatDetails: {
        adminId: {
            type :mongoose.Schema.Types.ObjectId,
            ref : "Users"
        }
    },
    users : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Users"
    },
    latestMessage : {
        type :mongoose.Schema.Types.ObjectId,
        ref : "Messages"
    }
    /**
     * chat id obvio 
     * users involved in chat --> array of users
     * type of chat (group or personal)
     * last message refernece (maybe)
     *reference  to message array storing the list of messages
     * admin or not for this chat 
     * chat admin?
     * group chat name
     * group chat image
     * 
     */
},
{
    timestamp : true
})

const chatcollection= mongoose.model('Chats', schema)

module.exports= chatcollection;