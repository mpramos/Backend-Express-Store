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


}
module.exports=ProductService