


function calculateTax(amount, discount = 0, ...extraFees) {           //extrafees do uzycia wiecej param niz 3
    return (amount * 1.2) - discount
    + extraFees.reduce((total, val) => total + val, 0);
}
let taxValue = calculateTax(100, 0);
console.log(`Dwa argumenty: ${taxValue}`);
taxValue = calculateTax(100);
console.log(`Jeden argument: ${taxValue}`);
taxValue = calculateTax(100, 10, 20);
console.log(`Trzy argumenty: ${taxValue}`);
taxValue = calculateTax(100,10, 20, 1, 30, 7);
console.log(`Sześć argumentów: ${taxValue}`);
