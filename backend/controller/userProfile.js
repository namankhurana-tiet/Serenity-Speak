const User = require('./../Schema/userSchema')
const Chat = require('./../Schema/chatSchema')

const userChat = async function(req, res){
    const userid = req.params.id
    
    const userchatid = Chat.find({users : userid}, {_id :1})

    const chathistory = Chat.find({_id : userchatid})
    res.send(chathistory)
}

const userProfilePic = async function(req, res){
    const userid = req.params.id;

    const userpic= await User.find({_id : userid}, {pic : 1})

    const usercontact = await User.find({_id : userid}, {email : 1})

    res.send({userpic, usercontact}).status(200)
}

module.exports= {userChat, userProfilePic}