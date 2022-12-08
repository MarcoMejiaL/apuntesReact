export class animal {
    constructor(public name:string){}

    move(){
        console.log('moving');
    }
    greeting(){
        console.log(`Hi my name is ${this.name}`);
    }

}
export class Dog extends animal{
constructor(
    public owner:string,
    public name:string
    ){
        super(name)
    }
}
const paquito = new animal('paquito')
paquito.move();
console.log(paquito.greeting());