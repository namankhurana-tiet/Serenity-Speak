const express= require('express');
const chatdata= require('../data')
const router= express()

router.get('/', (req, res)=>{
    res.send(chatdata)
})

router.get('/:id', (req, res)=>{
    thischat=chatdata.find( (c)=> c._id === req.params.id)
    // console.log(thischat)
    res.send(thischat)
})

module.exports=router
    // thischat=chatdata
    // console.log(thischat)