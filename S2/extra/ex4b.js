function findArrayIndex(array, text) {
    let j = 0;
    for (let i = 0 ; i < array.length ; i++) {
        if (array[i] == text) {
            j = 1;
            return i;
        }
    }
    if (j != 1) {
        return -1;
    }
}
function removeItem(array, text) {
    if (findArrayIndex(array, text) !== -1) {
        array.splice(findArrayIndex(array, text), 1);
        console.log(array);
    }
    else console.log('Elemento no encontrado.');
}

removeItem(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Caracol');
removeItem(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Mosquito');
removeItem(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Salamandra');
removeItem(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Ajolote');
removeItem(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Pepino');