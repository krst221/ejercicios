const animals = ["Salamandra montesa", "Delinicio", "Tigre de puntos", "Saltamontañas"];
function CuentaLasA (array) {
    let a = 0;
    for (const animal of animals) {
        for (const letra of animal) {
            if (letra == 'a') a++;
        }
    }
    return a;
}
console.log (CuentaLasA (animals));