const productRouter=require('./products.route')
const userRouter=require('./usuarios.route')
const express=require('express')
function ApiRoutes(app) {
    const router=express.Router()
    app.use('/api/v1/',router)
    router.use('/products',productRouter)
    router.use('/usuarios',userRouter)
}
module.exports=ApiRoutes