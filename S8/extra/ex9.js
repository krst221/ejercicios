const text = `gracioso-pero-no-gracioso-de-risa-gracioso-de-raro`

//Método 1

let result = ``;
for (let i = 0 ; i < text.length ; i++) {
    if(i === 0) {
        result += text[i].toUpperCase();
        i++;
    }
    if(text[i] !== `-`) result += text[i];
    else {
        result += ` `;
        result += text[i+1].toUpperCase();
        i++;
    }
}
console.log(result);

//Método 2

capitaliza = (result) => result[0].toUpperCase() + result.slice(1);
let resultCaps = espacios.split('-').map(capitaliza).join(' ');
console.log(resultCaps);