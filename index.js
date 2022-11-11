// Method .map 

// El método map() crea un nuevo array con los resultados
// de la llamada a la función indicada aplicados a cada uno de sus elementos.


let arrayNumbers = [1, 33, 45, 234, 56, 42, 566, 887, 786, 23]
let arrayNumbersQuadruple = arrayNumbers.map(function(x){
    return x* 4;
})

console.log("Valores del array multiplicados por cuatro", arrayNumbersQuadruple);


// Method .forEach 

// El método forEach() ejecuta la función indicada una vez por cada elemento del array.

arrayNumbers.forEach(numbers => console.log("\n\nArray paso por forEach", numbers));




// Method .filter() 

// El método filter() crea un nuevo array con todos los elementos que
// cumplan la condición implementada por la función dada.

const results = arrayNumbers.filter(number => number > 56);

console.log("\n\nArray result filtrado por el metodo filter", results);



// Method .sort() 

// El método sort() ordena los elementos de un arreglo (array) localmente
// y devuelve el arreglo ordenado. La ordenación no es necesariamente estable.
// El modo de ordenación por defecto responde a la posición del valor del string 
// de acuerdo a su valor Unicode.

arrayNumbers.sort();

console.log("\n\nArray result de ordenación por el metodo sort", arrayNumbers);

