export class MyDate{ 
    constructor(
       public year:number,
       public month:number,       
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
            this.month +=amount
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
}
const myDate = new MyDate(2022,2,1);
myDate.add(3,'years')
console.log(myDate.printFormat());
/* console.log(myDate.getDay()); */
console.log(myDate.day);
const myDate2= new MyDate(2003,1,1);
console.log(myDate2.printFormat());
console.log(myDate2.isLeapYear)

