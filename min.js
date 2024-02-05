const phonePrice = [25000, 20000, 32000, 45000, 10000, 540000];

function getmin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const cheap = getmin(phonePrice);
console.log(cheap);
console.log(phonePrice.map())