import {faker} from '@faker-js/faker'

import { addProduct, findProducts, products, updateProduct } from "./products/products.service";

for(let i =0; i<=50; i++){

    addProduct({
        description: faker.commerce.productDescription(),
        image: faker.image.imageUrl(),
        color: faker.color.human(),
        size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
        price: parseInt(faker.commerce.price(), 10),
        isNew: faker.datatype.boolean(),
        tags: faker.helpers.arrayElement(),
        title: faker.commerce.productName(),


        stock: faker.datatype.number({ min: 10, max: 100 }),
        categoryId: faker.datatype.uuid()
    })
    
    
}

console.log(products);

const product = products[0]
updateProduct(product.id,{
    title: 'New title',
    stock:80
})
findProducts