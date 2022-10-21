(()=>{  
    type UserID = string|number|boolean
 let userId: UserID;

 function gree(mytext:UserID, size:sizes){
    if(typeof mytext === 'string'){
        console.log('string');
    }else{
        console.log('otro');
    }
 }

 //litetar Types
 type sizes = "S"|"M"|"L"|"XL";
 let shirtSize:sizes;
 shirtSize ='M'
 shirtSize ='L'
 shirtSize ='XL'
 
gree('marco','XL')
})();