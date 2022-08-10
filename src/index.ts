function calculateTax(amount: number): number {       //1 numb parametr 2 num wynik
    return amount * 1.2;
}

let price: number = 100;
let taxAmount: number = calculateTax(price);
let halfShare: number = taxAmount / 2;

console.log(`Pełna kwota z podatkiem: ${taxAmount}`);
console.log(`Połowa kwoty z podatkiem: ${halfShare}`);
