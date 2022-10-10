const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, {id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}];
const toysDel = [];
for (const gatito of toys) {
    if(!gatito.name.includes('gato')) toysDel.push(gatito);
}
console.log(toysDel);