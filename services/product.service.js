const faker=require('faker')
class ProductService{
    constructor(){
        this.products=[]
        this.generate()
    }
    generate(){
        let limite=100
        for (let i = 0; i < limite; i++) {
            this.products.push({
                id:faker.datatype.uuid(),
                name:faker.commerce.productName(),
                price:parseInt(faker.commerce.price(),10),
                image:faker.image.imageUrl()
            })
        }
    }
create(data){
    const newProduct={
        id:faker.datatype.uuid(),
        ...data
    }
    this.products.push(newProduct)
    return newProduct
}

 

find(){
    return this.products
}
findOne(id){
return this.products.find((item)=>id===item.id)
}
update(id,changes){
    const index= this.products.findIndex(item=>item.id===id)
	if(index===-1){
		 throw new Error('No existe el producto')
}	
	this.products[index]=changes
    return this.products[index]
}
delete(id){
    const index=this.products.findIndex(item=>item.id===id)
    if(index===-1){
        throw new Error('No pudimos encontrar tu producto')
    }
    this.products.splice(index,1)
    return {id}
}

}
module.exports=ProductService