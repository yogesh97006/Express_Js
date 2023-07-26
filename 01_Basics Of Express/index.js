const express=require('express')
const app=express()
const port=8000

app.get('/',(req,res)=>{
    res.send('this is home page')
})

app.listen(port,()=>{
    console.log(`This is running on http://localhost:${port}`)
})