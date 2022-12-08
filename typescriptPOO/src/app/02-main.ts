import { ProductMemoryService} from './services/product-memory.service'

const productService = new ProductMemoryService

productService.create({
    title: 'Producto1',
    price: 100,
    description: 'sakdklsajdlkasjdlk',
    categoryId: 12,
    images: []
})
const producs = productService.getAll() 


const produtId = producs[0].id;

productService.update(produtId,{
    title:'cambiar nombre'
})

const rta = productService.findOne(produtId)
console.log(rta);