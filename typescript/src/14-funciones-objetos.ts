(()=>{
    const login = (data:{email:string,password:string})=>{
        console.log(data.email, data.password);

    }

    
    login({
        email:'email',
        password:'password'
    })
    
})()