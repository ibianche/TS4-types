


function calculateTax(amount, discount = 0) {
    return (amount * 1.2) - discount;
}
let taxValue = calculateTax(100, 0);
console.log(`Dwa argumenty: ${taxValue}`);
taxValue = calculateTax(100);
console.log(`Jeden argument: ${taxValue}`);
// taxValue = calculateTax(100, 10, 20);
// console.log(`Trzy argumenty: ${taxValue}`);
