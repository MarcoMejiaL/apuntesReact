import { Product } from "./product.model"

export interface CreateProductDto extends Omit<Product, 'id' | 'creaAt' | 'updateAt' |'category'>{
    categoryId: string
}

export interface updateDto extends Partial<CreateProductDto>{
    
}
export interface FindProductDto extends Readonly<Partial<Product>>{}

const num =0
const val2 = num ?? 'default'