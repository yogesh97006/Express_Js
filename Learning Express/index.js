let express=require('express')
let path=require('path')
let bodyParser=require('body-parser')
const routes=require('./userRoutes')

let app=express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(routes)


// app.get('/api/v1/',)
// app.post('/api/v1/',)

app.listen(8000,()=>{
    console.log('this is working on http:localhost:8000')
})
