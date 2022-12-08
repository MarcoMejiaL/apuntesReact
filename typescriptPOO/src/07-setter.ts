export class MyDate{ 
    constructor(
       public year:number,
       private _month:number,       
       private _day:number,
       ){}


    private addPadding(value:number){
       if (value<10){
           return `0${value}`
       }
       return value
    }
    printFormat():string{
       const day = this.addPadding(this._day)
       const month = this.addPadding(this.month)
        return `${day}/${month}/${this.year}`;
    }
    add(amount:number, type: 'day'|'months'|'years'){
        if(type ==='day'){
            this._day +=amount
        }
        if(type === 'months'){
            this._month +=amount
        }
        if(type === 'years'){
            this.year +=amount
        }
    }
    get day(){
        return this._day
    }

    get isLeapYear():boolean{
        if (this.year % 400 === 0) return true;
        if (this.year % 100 === 0) return false;
        return this.year % 4===0;
    }
    get month(){
        return this._month
    }

    set month(newValue:number){
        if(newValue >=1 && newValue <=12){
        this._month = newValue
    }else{
        throw new Error('mes fuera de rango')
    }
    }
}
const myDate = new MyDate(2022,2,1);
myDate.add(3,'years')
console.log(myDate.printFormat());
/* console.log(myDate.getDay()); */
console.log(myDate.day);


