let productName = "Labubu";
let department = 'Toys';
let costPerUnit = 60
let basePrice = 50
let discountRate = 0.05
let salesTaxRate = 0.06
let fixedMonthlyCosts = 500

discountedPrice = basePrice * (1 - discountRate)
finalPriceWithTax = discountedPrice * (1 + salesTaxRate)
profitPerUnit = finalPriceWithTax - costPerUnit
breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit)
isProfitablePerUnit (boolean) = profitPerUnit > 0

console.log(productName)
console.log(discountedPrice)
console.log(finalPriceWithTax)
console.log(finalPriceWithTax - costPerUnit)
console.log(breakEvenUnits)
console.log(costPerUnit)
.toFixed(2)