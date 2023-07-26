const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('<h1>This Home Page</h1>')
})

app.get('/About',(req,res)=>{
    res.status(200).send('<h1>This is About Us Page</h1>')
})

app.get('/Project',(req,res)=>{
    res.send('<h1>This Project Page</h1>')
})

app.get('/Contact',(req,res)=>{
    res.send('<h1>This is Contact Page</h1>')
})

app.listen(8000,()=>{
    console.log('the server is running on local host')
})