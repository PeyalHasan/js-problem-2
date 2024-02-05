function multiply(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please provide a number'
    }
    const multi = num1 * num2;
    return multi;
}

const result = multiply(5, 'seven');
console.log(result);


function fullName(first, second){
    if(typeof first !== 'string'){
        return 'First name should be string'
    }
    else if(typeof second !== 'string'){
        return 'Second name should be string';
    }
    const full = first + ' ' + second;
    return full;
}

const full = fullName ('Akmal', 'Jamal')
console.log(full)

function getPrice(numbers){
    if(Array.isArray(numbers) === false){
        return 'please provide an array'
    }
    const second = numbers[1];
    return second;
}