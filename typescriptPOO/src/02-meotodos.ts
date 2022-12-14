export class MyDate{
    year:number;
    month:number;
    day:number;

    constructor(year:number,month:number,day:number){
        this.year = year;
        this.month = month;
        this.day = day;
    }
    printFormat():string{
        return `${this.day}/${this.month}/${this.year}`;
    }
    add(amount:number, type: 'day'|'months'|'years'){
        if(type ==='day'){
            this.day +=amount
        }
        if(type === 'months'){
            this.month +=amount
        }
        if(type === 'years'){
            this.year +=amount
        }
    }
}
const myDate = new MyDate(2022,10,27);
myDate.add(3,'years')
console.log(myDate.printFormat());