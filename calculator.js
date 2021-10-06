let number1, number2;

const add = (number1, number2) => {
    return number1 + number2;
}

const subtract = (number1, number2) => {
    return number1 - number2;
}

const multiply = (number1, number2) =>{
    return Array(number2).fill(number1).reduce((acumulator, number) =>  acumulator + number,0 );
}

const divide = (number1, number2) => {
    multiply()
};

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
            alert("El resultado de multiplicar " + number1 + " * " +number2+ " es igual a: " +multiply(number1, number2));
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