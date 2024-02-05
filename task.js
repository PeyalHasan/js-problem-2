// Task ----> 1

const heights1 = [167, 190, 120, 165, 137];

function heights(height){
    let lowest = height[0];
    for(let low of height){
        if(lowest > low){
            lowest = low;
        }
    }
    return lowest;
}

const lowest = heights(heights1);
console.log(lowest);

//Task----> 2


const heights2 = ['rahim', 'robin', 'ron', 'rony', 'hira'];

function smallestName(heights){
    let smallest = heights[0];
    for(let small of heights){
        if(smallest.length > small.length){
            smallest = small
        }
    }
    return smallest;
}

const smallest = smallestName(heights2);
console.log(smallest);

// Task----> 3

function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity){
    const laptopPrice = 35000 ;
    const tabletPrice = 15000 ;
    const mobilePrice = 20000 ;

    const laptopTotalPrice = laptopQuantity * laptopPrice;
    const tabletTotalPrice = tabletQuantity * tabletPrice;
    const mobileTotalPrice = mobileQuantity * mobilePrice;
    
    const totalCost = laptopTotalPrice + tabletTotalPrice + mobileTotalPrice;
    
    return totalCost;
}
const laptop = 0;
const tablet = 0;
const mobile = 1;
const totalCost = calculateElectronicsBudget(laptop, tablet, 
mobile);
console.log(totalCost);


//Task ----> 4
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones){
    let totalPrice = 0;
    let average = 0;
    let totalPhone = phones.length;
    for(let phone of phones){
        totalPrice = totalPrice + phone.price;
        average = totalPrice / totalPhone
    }  
    return average;
}

const average = findAveragePhonePrice(phones);
console.log('average price of phone:', Math.floor(average))


// Task ----> 5

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function employeesSalary(salary){
    let sumStartingSalary = 0;
    let sumIncrement = 0;
    for(let sal of salary){
        sumStartingSalary = sumStartingSalary + sal.starting;
        sumIncrement = sumIncrement + sal.experience * sal.increment;
    }
    console.log('Starting Salary:', sumStartingSalary);
    console.log('Increment Salary:', sumIncrement);
    const totalSalary = sumIncrement + sumStartingSalary;
    return totalSalary;
}

const totalSalary = employeesSalary(employees);
console.log('Total Salary:' , totalSalary)