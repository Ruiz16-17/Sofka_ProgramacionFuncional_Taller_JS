const accumulator = Object.freeze(0);
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

const divide = (number1, number2, quotient) => {
    if(number2 == 0){
        return "No se puede dividir entre 0.";
    }
    if(number1 < 1){
        return quotient;
    }
    quotient++;
    return divide(number1 = subtract(number1, number2), number2, quotient);

} 

console.log(divide(12,0,accumulator));