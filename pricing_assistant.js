// Coding Challenge 02a

let productName = "Labubu";
let department = 'Toys';
let costPerUnit = 50
let basePrice = 65
let discountRate = 0.05
let salesTaxRate = 0.06
let fixedMonthlyCosts = 500
let initialCapital = 2000;
let unitsSold = 100;

discountedPrice = basePrice * (1 - discountRate)
finalPriceWithTax = discountedPrice * (1 + salesTaxRate)
profitPerUnit = (finalPriceWithTax - costPerUnit)
breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit)
isProfitablePerUnit = profitPerUnit > 0

let revenue = finalPriceWithTax * unitsSold
let expenses = (costPerUnit * unitsSold) + fixedMonthlyCosts;
let netCashFlow = (revenue - expenses)
let balance = initialCapital + netCashFlow

// Profit
console.log("Product:" , productName);
console.log("Discounted Price:", "$" + discountedPrice.toFixed(2));
console.log("Final Price With Tax:" , "$" + finalPriceWithTax.toFixed(2));
console.log("Profit Per Unit:" , "$" + (finalPriceWithTax - costPerUnit).toFixed(2));
console.log("Break Even Units:" , breakEvenUnits + " Labubus");
console.log("Profitable" , isProfitablePerUnit);

// Capital, Revenue, Expenses
console.log("Capital Investment:" , "$" + initialCapital);
console.log("Revenue:" , "$" + revenue);
console.log("Net Profit:" , "$" + (netCashFlow));
console.log("Current Balance:" , "$" + (balance));
