enum ROLES {
    ADMIN ="admin",
    SELLER = "seller",
    CUSTUMER = "customer"
}

type User ={
    username : string,
    role: ROLES,
}

const marcoUser: User ={
    username: 'marco',
    role: ROLES.ADMIN
}