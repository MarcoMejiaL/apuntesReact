import {Animal, Dog} from './09-protected'


const animal = new Animal('elite')
animal.greeting()

const paquito = new Dog('vale' ,'paquito')
paquito.greeting()
paquito.woof(2)