const express = require('express')
const router = express()
const authentication = require('./../controller/authentication')
const {userChat, userProfilePic} = require('./../controller/userProfile')
router.use(express.json())

router.get('/login', authentication.loginuser);

router.post('/createaccount', authentication.registeruser);

router.get('/login/:id', userChat)

router.get('/login/:id/profile', userProfilePic)

module.exports = router;

/**
 * LET'S discuss what will be the entire process ==> user on chat display where all chats are displayed
 * get /login/:contact
 * get /login/:contact/profile --> nope , that should be loaded directly with upper URL
 * send message --> POST ? ig sockets.io 
 * search user--> name? yes 
 * in the main screen populated with chats --> 
 * get /URL/:id where id represents the name only, OR like yes got it --> represents it in form of a query
 * 
 * 
 */