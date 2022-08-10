function calculateTax(amount) {
    return amount * 1.2;
}
let price = 100;
let taxAmount = calculateTax(price);
let halfShare = taxAmount / 2;
console.log(`Pełna kwota z podatkiem: ${taxAmount}`);
console.log(`Połowa kwoty z podatkiem: ${halfShare}`);
