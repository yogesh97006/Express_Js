const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('<h1>This is Home page writen in send <h1>')
})

app.get('/About',(req,res)=>{
    res.write('<h1>This is a About Page </h1>')
    res.write('<h1>This is writen in Write not in send</h1>')
    res.send()
})

app.get('/Data',(req,res)=>{
    res.json([{
        id:1,
        framework:'Express Js',
        used:'Backend'
    },
    undefined,
    null,
    true
])
    res.send()
})

app.get('/Contact',(req,res)=>{
    res.send({0:{
        phone:123456789,
        name:'Tillu',
        learning:'Node and Express'
    },
    1:{
        id:1,
        framework:'Express Js',
        used:'Backend'
    },
    2:undefined,
    3:null,
    4:true})
})

app.listen(8000,()=>{
 console.log('This server is running on Express 8000')
})