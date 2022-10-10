const list = [
    {name: "La tulipán", gender: "pop", order: 3},
    {name: "Calle falsa 123", gender: "rap", order: 2},
    {name: "Z balvin", gender: "reggeaton", order: 4},
    {name: "Neng de castefa", gender: "pop", order: 1}
]
function ordenaLista (array) {
    array.sort((a,b) => a.order - b.order);
    return array;
}
console.log(ordenaLista(list));