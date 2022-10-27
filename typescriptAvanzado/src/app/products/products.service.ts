import { faker, Faker } from '@faker-js/faker';
import {Product} from './product.model'
import {CreateProductDto,FindProductDto,updateDto} from './product.dto'
export const products: Product[]=[];

export const addProduct =(data:CreateProductDto): Product=>{
    const newProduct = {
        ...data,
        id:faker.datatype.uuid(),
        creaAt: faker.date.recent(),
        updateAt: faker.date.recent(),
        category:{
            id: data.categoryId,
            name: faker.commerce.department(),
            creaAt:faker.date.recent(),
            updateAt:faker.date.recent()
        }

    }
    products.push(newProduct)
    return newProduct
}

export const updateProduct =(id:Product['id'], changes: updateDto):Product=>{
    const index = products.findIndex(item=>item.id ===id)
    const prevData = products[index]
    products[index]={
        ...prevData,
        ...changes
    }
    return products[index]
}

export const deleteProudct =(id:string)=>{

}

export const findProducts = (dto:FindProductDto):Product[]=>{
    return products;

}