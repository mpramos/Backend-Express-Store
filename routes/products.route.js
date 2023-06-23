const express=require('express')
const ProductService=require('../services/product.service')
const router=express.Router()
const service=new ProductService()
router.get('/',(req,res)=>{
    const products= service.find()
    res.json(products)
})
router.get('/filter',(req,res)=>{
    res.send('Estamos en filter')
})
router.get('/:id',(req,res)=>{
    const {id}= req.params
    const product=service.findOne(id)
    res.json(product)
})
router.post('/',(req,res)=>{
    const body=req.body
    const newProducto=service.create(body)
    res.status(201).json(
       newProducto
    )
})
router.patch('/:id',(req,res)=>{
    const {id}=req.params
    const body=req.body
    const producto=service.update(id,body)
    res.json(producto)

})
router.delete('/:id',(req,res)=>{
    const {id}=req.params
    const respuesta=service.delete(id)
    res.json(respuesta)
})
module.exports=router
