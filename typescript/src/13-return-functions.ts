(()=>{
    const calcTotal=((Prices:number[])=>{
        let total = 0;
        Prices.forEach((item)=>{
            total +=item
        })
        return total
    })

    const rta = calcTotal([1,2,3,4])

    const printTotal=(price:number[])=>{
        const rta =calcTotal(price)
        console.log(`el total es ${rta}`);
    }
})()