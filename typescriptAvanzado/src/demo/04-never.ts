 const withoutend =()=>{
    while(true){
        console.log('taquitos');
    }
}
 
/* una funcion que nunca termina o que se ciclo  */


const fail =(message:string)=>{
    throw new Error(message)
}


const example =(input:unknown)=>{
    if(typeof input ==='string'){
        return 'es un string';
    }else if(Array.isArray(input)){
        return 'es un array';
    }
    return fail('fail');
}


console.log(example('hola'));
console.log(example([1,2,3,4]));
console.log(example(1));