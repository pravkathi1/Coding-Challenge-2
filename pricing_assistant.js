// Coding Challenge 02

let productName = "Labubu";
let department = 'Toys';
let costPerUnit = 50
let basePrice = 65
let discountRate = 0.05
let salesTaxRate = 0.06
let fixedMonthlyCosts = 500

discountedPrice = basePrice * (1 - discountRate)
finalPriceWithTax = discountedPrice * (1 + salesTaxRate)
profitPerUnit = finalPriceWithTax - costPerUnit
breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit)
isProfitablePerUnit = profitPerUnit > 0

console.log("Product:" , productName);
console.log("Discounted Price:", "$" + discountedPrice);
console.log("Final Price With Tax:" , "$" + finalPriceWithTax);
console.log("Profit Per Unit:" , "$" + (finalPriceWithTax - costPerUnit));
console.log("Break Even Units:" , "$" + breakEvenUnits);
console.log("Profitable" , isProfitablePerUnit);