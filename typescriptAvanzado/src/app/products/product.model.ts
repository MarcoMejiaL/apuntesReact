export type Sizes = 'S'|'M'|'L'|'XL'

export interface Product{
    id:string|number;
    title:string;
    creaAt: Date;
    stock: number
    size: Sizes;
}