import { Product, taxCalculator } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 150
    },
    {
        description: 'iPad',
        price: 250
    }
];

const tax: number = 0.15;
const [total, taxTotal] = taxCalculator({products: shoppingCart, tax});

console.table({total, taxTotal})