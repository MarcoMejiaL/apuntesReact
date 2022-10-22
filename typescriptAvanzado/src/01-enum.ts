export enum ROLES {
    ADMIN ="admin",
    SELLER = "seller",
    CUSTUMER = "customer"
}

export type User ={
    username : string,
    role: ROLES,
}

const marcoUser: User ={
    username: 'marco',
    role: ROLES.ADMIN
}