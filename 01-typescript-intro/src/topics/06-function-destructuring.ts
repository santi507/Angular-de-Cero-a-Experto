export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: "iPad Air",
    price: 250.0
}

interface TaxCalculatorOptions  {
    tax: number;
    products: Product[];
}

export function taxCalculator({products, tax}: TaxCalculatorOptions): [number, number] {
    let total = 0;
    products.forEach(({price}) => {
        total += price
    });

    return [total, total * tax];
}

/* const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculator({
    products: shoppingCart,
    tax
});

console.log('Sub Total: ', `$${total.toFixed(2)}`)
console.log('ITBMS: ', `$${Math.round(taxTotal).toFixed(2)}`);
console.log('Total: ', `$${total + taxTotal}`)
*/