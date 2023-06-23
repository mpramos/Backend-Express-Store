const productRouter=require('./products.route')
const express=require('express')
function ApiRoutes(app) {
    const router=express.Router()
    app.use('/api/v1/',router)
    router.use('/products',productRouter)
}
module.exports=ApiRoutes