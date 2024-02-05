const mobiles = [
    { name: 'Samsung', price: 25000, camera: '12mp', color: 'black'},
    { name: 'Xoami', price: 20000, camera: '12mp', color: 'black'},
    { name: 'Oppo', price: 30000, camera: '12mp', color: 'black'},
    { name: 'Iphone', price: 155000, camera: '12mp', color: 'black'},
    { name: 'Walton', price: 15000, camera: '12mp', color: 'black'},
    { name: 'HTC', price: 27000, camera: '12mp', color: 'black'}
]

function getCheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone
        }
    }
    return min;
}

const cheap = getCheapestPhone(mobiles);
console.log(cheap )

function getRichestPhone(phones){
    let max = phones[0];
    for(const phone of phones){
        if(phone.price > max.price){
            max = phone
        }
    }
    return max;
}

const mobile = getRichestPhone(mobiles);
console.log(mobile)