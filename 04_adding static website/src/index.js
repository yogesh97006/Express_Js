const path=require('path')
const express=require('express')

const port=8000
const app=express()

 const filepath=path.join(__dirname,'../public')

app.use(express.static(filepath))

app.get('/',(req,res)=>{
    res.send('This is working')
})

app.listen(port,()=>{
    console.log(`the server is running on server http://localhost:${port}`)
})