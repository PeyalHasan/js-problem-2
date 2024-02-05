const heights = [65, 66, 68, 72, 78, 60, 65, 66];

function getTallest(height){
    let max = heights[0];
    for(let i of height){
        if(i > max){
           max = i;
        }
    }
    return max;
}

const tallestNum = getTallest(heights);
console.log(tallestNum)

// homework: min number

const minNumber = [23, 12, 54, 65, 76, 76, 3, 54, 1];

function getMinNum(numbers){
    let min = minNumber[0];
    for(let num of numbers){
        if(num < min){
            min = num
        }
    }
    return min;
}

const result = getMinNum(minNumber);
console.log(result)