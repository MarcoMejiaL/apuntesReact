export class MyDate{
    public year:number;
    private month:number;
    public day:number;
 
     constructor(year:number,month:number,day:number){
         this.year = year;
         this.month = month;
         this.day = day;
     }
     private addPadding(value:number){
        if (value<10){
            return `0${value}`
        }
        return value
     }
     printFormat():string{
        const day = this.addPadding(this.day)
        const month = this.addPadding(this.month)
         return `${day}/${month}/${this.year}`;
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
 const myDate = new MyDate(2022,2,1);
 myDate.add(3,'years')
 console.log(myDate.printFormat());
 