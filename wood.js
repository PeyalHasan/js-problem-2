/**
 * chair --> 3cft
 * table --> 10cft
 * bed --> 50cft
 */

function woodQuantity (chairQuantity, tableQuantity, bedQuantity){
    const perCahirWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perCahirWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;
    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}

console.log(woodQuantity(1, 1, 1))

function shopping(shirtQuantity, pantQuantity, shoeQuantity){
    const perShirtPrice = 500;
    const perPantPrice = 300;
    const perShoePrice = 900;

    const shirtPrice = shirtQuantity * perShirtPrice;
    const pantPrice = pantQuantity * perPantPrice;
    const shoePrice = shoeQuantity * perShoePrice;

    const totalCost = shirtPrice + pantPrice + shoePrice ;
    return totalCost;
}

console.log(shopping(2, 2, 1))