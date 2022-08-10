function calculateTax(amount, discount) {
    return (amount * 1.2) - (discount || 0); // || 0 uzywa sie jezeli parametr nie bedzie zdefiniowany
}
let taxValue = calculateTax(100, 0);
console.log(`Dwa argumenty: ${taxValue}`);
taxValue = calculateTax(100);
console.log(`Jeden argument: ${taxValue}`);
// taxValue = calculateTax(100, 10, 20);
// console.log(`Trzy argumenty: ${taxValue}`);
