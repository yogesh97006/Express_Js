const express=require('express')
const {ECallBackFun,ECallBackFunGet}=require('./ECallBackFun')

const routers=express.Router()

routers.route('/api/v1/registered').post(ECallBackFun)
routers.route('/').get(ECallBackFunGet)

module.exports=routers