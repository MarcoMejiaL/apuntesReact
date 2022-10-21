(()=>{
    type Products ={
        name:string,
        edad:number,
        peso?:number | undefined
    }
    const products :any[]=[];

    const funcionBase =(data:Products)=>{
        return data
    }
    const rta = funcionBase({name:'marco',edad:32})
    console.log(rta);
})()