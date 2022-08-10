function calculateTax(amount: number, format: boolean): string | number {
    const calcAmount = amount * 1.2;
    return format ? `${(amount * 1.2).toFixed(2)} zł` : calcAmount;
}

let taxNumber: string | number = calculateTax(100, false);
let taxString: string | number = calculateTax(100, true);


console.log(`Wartość typu number: ${taxNumber.toFixed(2)}`);
console.log(`Wartość typu string: ${taxString.charAt(0)}`);
