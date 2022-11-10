export class Animal {
    constructor(
        protected name:string){} /* protected es un metodo privado con herencia */

    move(){
        console.log('moving');
    }
    greeting(){
        console.log(`Hi my name is ${this.name}`);
    }

}
export class Dog extends Animal{
constructor(
    public owner:string,
     name:string
    ){
        super(name)
    }
    woof(times:number){
        for(let index =0; index<times; index++){
            console.log(`woof ${this.name}`);
        }
    }
    greeting(){
        super.greeting()
        console.log(`and my owner is ${this.owner}`);
    }
}


/* const seven = new Dog('vale', 'seven')

seven.woof(1)
console.log(seven.greeting()); */