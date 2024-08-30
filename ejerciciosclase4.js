1/*. Ejercicio 1: Ciclo For
   - Escribe un ciclo `for` que imprima los números del 1 al 10 en la consola.

2. Ejercicio 2: Iterar un Array
   - Crea un array con los nombres de 5 frutas y usa un ciclo `for` para imprimir cada uno.

3. Ejercicio 3: Métodos de Arrays
   - Utiliza el método `map` para crear un nuevo array que contenga la longitud de cada string en un array de nombres.
   - Usa el método `filter` para crear un nuevo array que contenga solo los números mayores a 10 de un array dado.
   - Emplea el método `reduce` para calcular la suma de todos los números en un array.*/

/*ejercicio 1 */

for (let i = 0 ; i < 10;i++){

console.log(i)
}


/* ejercicio 2 */

array = ["banana","pera", "frutilla","limon","manzana" ]
for (let i = 0; i<=array.length; i++){
    console.log(array[i])
}

/* ejercicio 3
FUNCION MAPS*/

array1 = ["pana","compi","chukers"]
array2 = array1.map(array1 => array1.length) 
console.log(array2)

/* MAPS CON FOR */

array1 = ["pana","compi","chukers"]

let largopalabra=[]
/* genero lista vacia para luego llenarla con los largos de las palabras */

for (let i = 0; i<array1.length; i++){
    largopalabra[i] = array1[i].length
}

console.log(largopalabra)
    

/* FUNCION FILTER*/

array1 = ["pana","compi","chukers"]
array2 = array1.filter()
console.log(array2)














