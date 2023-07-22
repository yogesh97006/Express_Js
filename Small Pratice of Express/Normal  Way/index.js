const express=require('express')
const bodyParser=require('body-parser')

const app=express()
app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    // res.send(' this is home page or get page')

    res.sendFile('C:/Users/91970/Desktop/New folder/Express_Js/Small Pratice of Express/Normal  Way/index.html')
})
app.post('/api/v1/registered',(req,res)=>{
    // const userInfo=req.body
    // res.send(userInfo)

    
})

app.listen(8000,()=>{
    console.log(__dirname)
    console.log(`it's working on port http://localhost:8000`)
})