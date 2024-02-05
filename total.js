const products = [
    { name: 'Shampoo', price: 300},
    { name: 'Hair Cream', price: 600},
    { name: 'Shirt', price: 600},
    { name: 'Pant', price: 1100},
    { name: 'Shoe', price: 1500},
];

function getShoppingTotal(products){
    let total = 0;
    for(const product of products){
        total=total + product.price
    }
    return total;
}

const total = getShoppingTotal(products);
console.log(total)