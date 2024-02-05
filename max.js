/**
 * 
 * 
 */

function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2
    }
}

const max1 = getMax(56, 79);
console.log(max1)

function max3(a, b, c){
    if(a > b && a > c){
        return a;
    }
    else if(b > c){
        return b;
    }
    else{
        return c;
    }
}


const number = max3(12, 34, 65);
console.log(number)


//Unlimited number max find ?

const max = Math.max(12, 1, 23, 32, 433, 211, 34, 54, 3);
console.log(max)