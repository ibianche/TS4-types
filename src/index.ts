function calculateTax(amount: number, format: boolean): string | number {
    const calcAmount = amount * 1.2;
    return format ? `${calcAmount.toFixed(2)} zł` : calcAmount;
}

let taxNumber = calculateTax(100, false) as number;
let taxString = calculateTax(100, true) as string;
let taxBoolean = calculateTax(100, false) as any as boolean;


console.log(`Wartość typu number: ${taxNumber.toFixed(2)}`);
console.log(`Wartość typu string: ${taxString.charAt(7)}${taxString.charAt(8)}`);
console.log(`Wartość typu boolean: ${taxBoolean}`);
