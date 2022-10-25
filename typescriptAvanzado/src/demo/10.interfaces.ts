type Sizes = 'S'|'M'|'L'|'XL'
/* type Product ={
    id:string|number;
    title:string;
    creaAt: string;
    size: Sizes;
} */

/* un interface se puede heredar a otra interface con la palabra extends */
interface Product{
    id:string|number;
    title:string;
    creaAt: Date;
    stock: number
    size: Sizes;
}

const products: Product[]=[];

products.push({
    id:1,
    title:'p1',
    creaAt:new Date(),
    stock:90,
    size:'S'

})