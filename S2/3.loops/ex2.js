const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
for (const dato in alien) {
    console.log('Dato: ' + dato + ' Valor: ' + alien[dato]);
}