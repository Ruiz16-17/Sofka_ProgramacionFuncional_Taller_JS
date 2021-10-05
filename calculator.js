const acumulador = Object.freeze(0);
let option = prompt("¿Qué deseas hacer?",
    "1. Sumar",
    "2. Restar",
    "3. Multiplicar",
    "4. Dividir");

const add = (number1, number2) => {
    return number1 + number2;
}

const subtract = (number1, number2) => {
    return number1 - number2;
}

const multiplyPositive = (number1, number2, acumulador) => {

        if (number2 < 1) {
            return acumulador;
            
        }
        return multiplyPositive(number1, number2 - 1, acumulador = add(acumulador, number1));
    
}


const multiplyNegative = (number1, number2, acumulador) => {

    if (number2 > -1) {
        return Math.abs(acumulador);   
    }
    return multiplyNegative(number1, number2 + 1, acumulador = add(acumulador, number1));

}

console.log(multiplyPositive(-2, 5, acumulador));
console.log(multiplyNegative(-2, -5, acumulador));
