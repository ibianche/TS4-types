function calculateTax(amount, format) {
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
        let value = taxValue;
        console.log(`Nieoczekiwany typ dla wartości: ${value}`);
}
let newResult = calculateTax(200, false);
let myNumber = newResult;
console.log(`Wartość liczbowa: ${myNumber.toFixed(2)}`);
//       to samo co wyzej tylko sprawdza typ wartosci w case
// if(typeof taxValue === "number"){
//     console.log(`Wartośc typu number: ${taxValue.toFixed(2)}`);
// } else if(typeof taxValue === "string"){
//     console.log(`Wartośc typu string: ${taxValue.charAt(7)}${taxValue.charAt(8)}`);
// }
