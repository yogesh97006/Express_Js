const express=require('express')
const path=require('path')
const app=express()

const tempath=path.join(__dirname,'../temp')

app.set('view engine','hbs')
app.set('views',tempath)


app.get('',(req,res)=>{
    res.render('index',{
        Name:'From Yogesh'
    })
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.listen(8000,()=>{

})