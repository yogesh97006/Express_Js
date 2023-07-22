const ECallBackFun=(req,res)=>{
    // const userInfo=req.body
    // res.send(userInfo)

    // res.send(` Your Name is : ${userInfo.user_name} and Your Email address is : ${userInfo.user_email} and Your Message is  ${userInfo.user_message}`)

     const UserName=req.body.user_name
     const UserEmail=req.body.user_email
     const UserMessage=req.body.user_message

    res.json({
     success:true,
    //  name:UserName,
    //  email:UserEmail,
    //  message:UserMessage
    })
}

const ECallBackFunGet=(req,res)=>{
    // res.send(' this is home page or get page')

    res.sendFile('C:/Users/91970/Desktop/New folder/Express_Js/Small Pratice of Express/Normal  Way/index.html')

    // res.json({
    //     name:'Yogesh',
    //     email:'Yogesh@gmail.com',
    //     message:'I am Learning Express Js'

    // })
}

module.exports={ECallBackFun,ECallBackFunGet}