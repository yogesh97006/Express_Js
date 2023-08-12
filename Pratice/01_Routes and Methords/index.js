const express=require('express')

const app=express()

app.get('/',(req,res)=>{
    res.send('<h1>This is Home Page</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1>This is a About Page</h1>')
})

app.get('/projects',(req,res)=>{
    res.send('<h1>This is a Projects Page</h1>')
})

app.get('/contact',(req,res)=>{
    res.send('<h1>This is a Contact Page</h1>')
})



app.listen(process.env.PORT,()=>{
    console.log(`The Server is running on port http://localhost:${process.env.PORT}`)
})