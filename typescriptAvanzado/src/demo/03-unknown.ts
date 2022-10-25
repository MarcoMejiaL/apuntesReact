let anyvar:any; //<=puede ser cualquier cosa

anyvar = true;
anyvar = undefined;


let unknowVar:unknown;
/* 
funciona como el any pero tienes que hacer la validacion del tipo de dato
unknown >>>>>> any (no recomendado)

*/
unknowVar=true
unknowVar=undefined
unknowVar=null

if(unknowVar === 'string'){
    unknowVar.toUpperCase();
}

