/* 
* Ejercicio 2
* → Devuelve si puedes conducir
*/
function puedesConducir (edad) {
// PRIMERA ITERACIÓN: Declara variable age

// SEGUNDA ITERACIÓN: Comprobar con un condicional si puedes conducir
edad >= 18 ? console.log('Puedes conducir.') : console.log ('No puedes conducir.');
// TERCERA ITERACIÓN: Mostrar si puede conducir o no
}
puedesConducir (16);
puedesConducir (18);
puedesConducir (20);
/* 
* Ejercicio 3
* → Quiero comer Pizza
*/

// PRIMERA ITERACIÓN: Declara variable con un listado de comidas
const comidas = ['Pasta' , 'Pescado', 'Pizza' , 'Helado'];
const comidas2 = ['Helado' , 'Sopa' , 'Tostadas' , 'Café'];
// SEGUNDA ITERACIÓN: Recorrer el listado de comidas
function sirvePizza (array) {
    array.includes ('Pizza') ? console.log ('Aquí tienes tu pizza, gordo.') : console.log ('No hay pizza, mala suerte.');
}
sirvePizza (comidas);
sirvePizza (comidas2);
// TERCERA ITERACIÓN: Si hay pizza me sirves pizza 

// CUARTA ITERACIÓN: Declara variable estoy a dieta
function sirvePizzaDieta (array, dieta) {
    if (array.includes ('Pizza') && dieta == 'si') console.log ('Hay pizza pero estás a dieta, toma brócoli')
    else if (array.includes ('Pizza') && dieta == 'no') console.log ('Aquí tienes tu pizza, gordo.');
    else console.log ('No hay pizza, mala suerte.')
}
sirvePizzaDieta (comidas, 'si');
sirvePizzaDieta (comidas, 'no');
sirvePizzaDieta (comidas2, 'si');
sirvePizzaDieta (comidas2, 'no');
// QUINTA ITERACIÓN: Cuando quiera pizza me sirves brocoli

/* 
* Ejercicio 3
* → E-L-R-A-Y-O-E-S-E-L-M-E-J-O-R
*/
let rayo = 'El rayo es el mejor';
function mayusGuiones (string) {
    let stringup = [];
    for(let i = 0 ; i < string.length ; i++) {
        stringup.push(string[i].toUpperCase());
        if(string[i] === ' ') stringup.splice(i, 1, '-');
    }
    return stringup;
}
console.log (mayusGuiones(rayo));
// PRIMERA ITERACIÓN: Declara variable con 'El rayo es el mejor'

// SEGUNDA ITERACIÓN: Pasa ese texto a mayúsculas -> MDN es vuestro amigo

// TERCERA ITERACIÓN: Modifica el string -> to array MDN 

// CUARTA ITERACIÓN: Añade un '-' después de cada elemento

// Devuelve en un string E-L-R-A-Y-O-E-S-E-L-M-E-J-O-R

/* 
* Ejercicio 4
* → La piramide - imprime por consola:
1
22
333
4444
55555
666666
7777777
88888888
999999999
*/

let piramide = [];
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
        piramide += i;
    }
    piramide += '\n';
}
console.log(piramide);
/* 
* Ejercicio 5
* → La piramide Invertida- imprime por consola:
999999999
88888888
7777777
666666
55555
4444
333
22
1
*/
let piramidei = [];
for (let i = 9; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
        piramidei += i;
    }
    piramidei += '\n';
}
console.log(piramidei);


/* 
* Ejercicio 6 - BONUS
* → Palíndromo: Esta función debe recibir un string y decir si es un palíndromo. 
* Un palíndromo es una frase que se lee igual al derecho que al revés.
*/

let palindrome = (word) => {
    // PRIMERA ITERACIÓN: declarar variable y pasarle el valor + toUpperCase + Eliminar espacios replace MDN
    let initialWord = word; // + toUpperCase + replace;
    initialWord = initialWord.toUpperCase().replace(/\s/g,'');
    console.log(initialWord);
    // SEGUNDA ITERACIÓN: Hacer split + reverse + join MDN
    let reverseWord = initialWord //  Split into an array, Reverse array, Join array elements into string
    reverseWord = reverseWord.split('').reverse().join('');
    console.log(reverseWord);
    // TERCERA ITERACIÓN: Devolver true o false
    return initialWord === reverseWord ? true : false;  // check if word is palindrome
}
// CUARTA ITERACIÓN: Llamar a la función palindrome pasando una palabra o frase- 'Yo soy'
console.log(palindrome('Amor azul Ramera de todo te di Mariposa colosal si yo de todo te di Poda la rosa Venus El atomo como tal es un evasor alado Pide todo te doy isla sol ocaso piramide todo te dare mar luz aroma') ? 'es palíndromo' : 'NO es palíndromo');