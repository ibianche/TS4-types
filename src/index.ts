function calculateTax(amount): any {
    return `${(amount * 1.2).toFixed(2)} zł`;
}

let price = 100;
let taxAmount = calculateTax(price);
let halfShare = taxAmount / 2;

let personVal = calculateTax('Bartek');

console.log(`Cena ${price}`);
console.log(`Pełna kwota z podatkiem: ${taxAmount}`);
console.log(`Połowa kwoty z podatkiem: ${halfShare}`);
console.log(`Imię: ${personVal}`);


