// Se crea la primera función con una constante con la forma Function Arrow
const funcionMult = () => {

    // Ingresar datos de entrada
    let n1 = prompt("Ingrese un número entre 1 y 20");
    n1 = parseInt(n1);

    // Se crea la condición con el If donde los datos ingresados no deben ser mayor a 20
    if (n1 <= 20) {

        // Calcular la multiplicación dentro de un For utilizando la variable Let
        for (let i = 1; i <= n1; i++) {
            let resultado = n1 * i;
            console.log(`${n1} x ${i} = ${resultado}\n`);
        }

        // Calcular el factorial con el método For anidado
        for (let i = 1; i <= n1; i++) {
            // Igualar la variable factorial a 1
            let factorial = 1
            for (let j = 1; j <= i; j++) {
                factorial = factorial * j;
            }
            console.log(`El factorial de ${i}, es: ${factorial}`);
        }
    }
    // Usar else para todos los casos que quedan fuera del ejercicio
    else {
        alert(`El número ${n1} se encuentra fuera de rango`);
    }
}
// Se llama a la función
funcionMult();









/* let n1 = prompt("Ingrese un número")
for(let i = 1; i <= 20; i++) {
   n1! = (n1*(n1-1)!)
}
document.write()*/


/* let n1 =prompt("Ingrese un numero")
const mult = () => {
    n1=parseInt(n1)
    if(i = 1, i <= 20, i++) {
    factorial
}
}*/