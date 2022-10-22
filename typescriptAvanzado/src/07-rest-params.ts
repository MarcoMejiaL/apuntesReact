import { User, ROLES } from "./01-enum"

const currentUser:User ={
    username:'marco',
    role: ROLES.CUSTUMER

}

export const checkadminRole =()=>{
    if(currentUser.role ===ROLES.ADMIN){
        return true
    }
    return false
}

const rta =checkadminRole();

console.log(rta);