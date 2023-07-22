const express=require('express')
const Register=require('./userInfo')

const routes=express.Router()

routes.route('/api/v1/Register').get(Register).post((req,res)=>{
    // const username=req.body
    // console.log(username)
    // res.send(`<h1>Your Name is :${username.name} and Your Email id is :${username.email}</h1>`)

    const userName=req.body.name
    const userEmail=req.body.email
    // const userPassword=req.body.password
    


    res.json({
      success:true,
      name:userName,
      email:userEmail
    })
})

module.exports=routes