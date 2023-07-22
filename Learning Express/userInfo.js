const Registertion=(req,res)=>{
    // console.log('its working')
    // console.log(path.join(__dirname+'/index.html'))
    // res.sendFile(path.join(__dirname+'/index.html'))

    res.json({
       name:'Yogesh',
       email:'Yogesh@gmail.com',
       password:123456
    })
}

module.exports=Registertion