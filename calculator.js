const accumulator = Object.freeze(0);
let number1, number2;


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

const verifyMultiplication = (number1, number2) =>{
    if(number2 < 0){
        alert("Resultado de la multiplicación de " + number1 + " x " + number2 + " es igual a: " + multiplyNegative(number1,number2,accumulator));
    }
    if(number2 > 0){
        alert("Resultado de la multiplicación de " + number1 + " x " + number2 + " es igual a: " + multiplyPositive(number1,number2,accumulator));
    }
    if(number2 == 0 && number1 == 0){
        alert("Resultado: 0");
    }
}

let option = prompt("¿Qué deseas hacer?\n"+
    "1. Sumar\n"+
    "2. Restar\n"+
    "3. Multiplicar\n"+
    "4. Dividir");

    switch (option) {
        case "1":
            number1 = parseInt(prompt("Ingrese el numero 1."));
            number2 = parseInt(prompt("Ingrese el numero 2."));
            alert("Resultado de la suma de " + number1 + " + " + number2 + " es igual a: " + add(number1,number2));
            break;
        case "2":
            number1 = prompt("Ingrese el numero 1.");
            number2 = prompt("Ingrese el numero 2.");
            alert("Resultado de la resta de " + number1 + " - " + number2 + " es igual a: " + subtract(number1,number2));
            break;
            
        case "3":
            number1 = parseInt(prompt("Ingrese el numero 1."));
            number2 = parseInt(prompt("Ingrese el numero 2."));
            verifyMultiplication(number1, number2);
            break;
            
        case "4":
            number1 = parseInt(prompt("Ingrese el numero 1."));
            number2 = parseInt(prompt("Ingrese el numero 2."));
            alert("Resultado de la división de " + number1 + " / " + number2 + " es igual a: " + divide(number1,number2, accumulator));
            break;

        case "5":
            alert("Terminando proceso.");
            break;

        default:
            alert("Valor no encontrado.");
            break;
    }