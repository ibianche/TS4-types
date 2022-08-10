function calculateTax(amount: number, format: boolean): string | number {
    const calcAmount = amount * 1.2;
    return format ? `${calcAmount.toFixed(2)} zł` : calcAmount;
}

let taxValue = calculateTax(100, false);

switch (typeof taxValue) {
    case "number":
        console.log(`Wartośc typu number: ${taxValue.toFixed(2)}`);
        break;
    case "string":
        console.log(`Wartośc typu string: ${taxValue.charAt(7)}${taxValue.charAt(8)}`);
        break;
    default:
        let value: never = taxValue;
        console.log(`Nieoczekiwany typ dla wartości: ${value}`);
}
//       to samo co wyzej tylko sprawdza typ wartosci w case
// if(typeof taxValue === "number"){
//     console.log(`Wartośc typu number: ${taxValue.toFixed(2)}`);
// } else if(typeof taxValue === "string"){
//     console.log(`Wartośc typu string: ${taxValue.charAt(7)}${taxValue.charAt(8)}`);
// }
