class MyMath{
    static readonly PI = 3.1416

    static max(...numbers:number[]){
        
        return numbers.reduce((max,item) => max > item ? max:item)

    }
}

console.log(MyMath.PI);
console.log(MyMath.max(1,2,3,4,555));
console.log(MyMath.max(-1,-2,-3,-555));