const handler = require('express-async-handler')
const User= require('../Schema/userSchema')


const loginuser = async (req, res) =>{
    const sentemail=req.body.email
    const sentpwd=req.body.password

    if( !sentemail || !sentpwd)
    {
        res.status(400)
        throw new Error('Please enter all the fields')
    }

   const userExists= await User.findOne({email : sentemail}, {_id : 1, password : 1})
//  const userpwd=userExists.password;
  
    if(!userExists)
    throw new Error(`User doesn't exists`)
    else if(!(userExists.matchpassword(sentpwd)))
   throw new Error('Please enter the correct password')
    else{
    // // now redirect to main screen
    res.send(`User gets redirected to main screen
    ${userExists}`)
    }
}


const registeruser = async(req, res)=>{
    // const email=req.body.email
    // const pwd= req.body.password
    // const name= req.body.name
    const {name, email, password}= req.body

    // console.log(`The name is ${name} and email is ${email} and pwd is ${password}`)
    if(!email || !password || !name)
    throw new Error('Enter the complete details')

    const userExists = await User.findOne({email : email})

    if(userExists)
    throw new Error('User already exists')

   const newuser= await  User.create({ name : name, email : email, password : password});

   if(!newuser)
    throw new Error(`User couldn't be created`)
   console.log(`User created successfully ${newuser}`)
   res.send('Success')
}
module.exports.loginuser= loginuser;
module.exports.registeruser= registeruser;