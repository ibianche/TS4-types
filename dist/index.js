function calculateTax(amount, format) {
    const calcAmount = amount * 1.2;
    return format ? `${(amount * 1.2).toFixed(2)} zł` : calcAmount;
}
let taxNumber = calculateTax(100, false);
let taxString = calculateTax(100, true);
console.log(`Wartość typu number: ${taxNumber.toFixed(2)}`);
console.log(`Wartość typu string: ${taxString.charAt(0)}`);
