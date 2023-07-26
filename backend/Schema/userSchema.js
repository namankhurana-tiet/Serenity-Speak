const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const ss= mongoose.Schema({
    name : {
        type : String, 
        required : true
    },
    email :{
        type : String, 
        required : true
    },
    password :{
        type : String, required : true
    },
    pic :{
        type :String,
        // required : true,
        default : "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    }
    // also can add custom validators

}, 
{
    timestamps : true
})

ss.methods.matchpassword = async function(userpwd){
  return await bcrypt.compare(userpwd, this.password)
}

ss.pre("save", async function(next){
    if(!this.isModified('password'))
    next()
    const salt = await bcrypt.genSalt(10)
    this.password= await bcrypt.hash(this.password, salt)
})

module.exports.matchpassword= ss.methods.matchpassword
const usercollection= mongoose.model('Users', ss)
module.exports= usercollection