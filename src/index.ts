function calculateTax(amount: number, format: boolean): string | number | null {
    if (amount === 0) {
        return null;
    }
    const calcAmount = amount * 1.2;
    return format ? `${calcAmount.toFixed(2)} zł` : calcAmount;
}

let taxValue!: string | number | null;
eval("taxValue = calculateTax(100, false)");
if (taxValue !== null) {
    let nonNullTaxValue: string | number = taxValue;
    switch (typeof taxValue) {
        case "number":
            console.log(`Wartośc typu number: ${taxValue.toFixed(2)}`);
            break;
        case "string":
            console.log(`Wartośc typu string: ${taxValue.charAt(7)}${taxValue.charAt(8)}`);
            break;
    }
} else {
    console.log("To nie jest wartosc typu string lub number");
}

// default:
//     if(taxValue === null){
//         console.log(`Wartość to null`);
//     } else {
//         console.log(typeof taxValue);
//         let value: never = taxValue;
//         console.log(`Nieoczekiwany typ dla wartości: ${value}`);
//     }
// }

// let newResult: unknown = calculateTax(200, false);
// let myNumber: number = newResult as number;
// console.log(`Wartość liczbowa: ${myNumber.toFixed(2)}`);

