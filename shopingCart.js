const products = [
    { name: 'Shampoo', price: 300, quantity: 2},
    { name: 'Hair Cream', price: 600, quantity: 3},
    { name: 'Shirt', price: 600, quantity: 5},
    { name: 'Pant', price: 1100, quantity: 3},
    { name: 'Shoe', price: 1500, quantity: 2},
];

function cartTotal(products){
    let total = 0;
    for(const product of products){
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    } 
    return total;
}

const cost = cartTotal(products);
console.log("Total Cost: ", cost)