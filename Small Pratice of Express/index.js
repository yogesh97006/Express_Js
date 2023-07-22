const express=require('express')
const bodyParser=require('body-parser')
const routes=require('./ERoutes')

const app=express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(routes)

// app.get('/',(req,res)=>{
//     // res.send(' this is home page or get page')

//     res.sendFile('C:/Users/91970/Desktop/New folder/Express_Js/Small Pratice of Express/Normal  Way/index.html')

//     // res.json({
//     //     name:'Yogesh',
//     //     email:'Yogesh@gmail.com',
//     //     message:'I am Learning Express Js'

//     // })
// })

// app.post('/api/v1/registered',
// (req,res)=>{
//     // const userInfo=req.body
//     // res.send(userInfo)

//     // res.send(` Your Name is : ${userInfo.user_name} and Your Email address is : ${userInfo.user_email} and Your Message is  ${userInfo.user_message}`)

//      const UserName=req.body.user_name
//      const UserEmail=req.body.user_email
//      const UserMessage=req.body.user_message

//     res.json({
//      success:true,
//     //  name:UserName,
//     //  email:UserEmail,
//     //  message:UserMessage
//     })
// }
// )

app.listen(8000,()=>{
    console.log(__dirname)
    console.log(`it's working on port http://localhost:8000`)
})