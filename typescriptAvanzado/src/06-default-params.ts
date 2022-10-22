export const createProduct =(
    id: string| number,
    stock: number = 100,
    isNew:boolean = true,
)=>{
    return{
        id,
        stock,
        isNew 
    }
}


const p1 =createProduct(1,12,true)

console.log(p1);

const p2 =createProduct(1)
console.log(p2);
const p3 =createProduct(1,0,false)
console.log(p3);