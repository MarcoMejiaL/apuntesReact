(()=>{
    type Sizes = 'S'|'M'|'L'|'XL'
    function createProductToJson(
        title:string,
        createdAt: Date,
        stock:number,
        size?: Sizes |undefined /* <= el signo ? lo convierte en opcional */
        ){
            return {
                title,
                createdAt,
                stock,
                size
            }
    
    }
    const producto1 = createProductToJson('p1',new Date(),12)
    console.log(producto1);
    console.log(producto1.title);

})();