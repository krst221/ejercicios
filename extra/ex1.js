const datos = 'Perico Delospalotes';
function splitName (array) {
    let nombre = '';
    let apellido = '';
    nombre = array.substring(0, array.indexOf(' '));
    apellido = array.substring(array.indexOf(' ')+1);
    return [nombre, apellido];    
}
console.log (splitName (datos));
