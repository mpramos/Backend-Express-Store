const express= require('express')

const app=express()
app.use(express.json())
const port= 3000
const ApiRoutes = require('./routes/index')
app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/categories/:idCategory/products/:idProduct',(req,res)=>{
    const {idCategory,idProduct}=req.params
    res.json({
        idCategory,
        idProduct
    })
})
app.get('/users',(req,resp)=>{
    const {limit,ofset}=req.query
    resp.json({
        limit,
        ofset
    })
})
ApiRoutes(app)
app.listen(port,()=>{
    console.log('Escuchando el '+ port)
})
