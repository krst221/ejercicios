const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 
const copia = [...colors];
copia.splice(1,1);
console.log(colors, copia);