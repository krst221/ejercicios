function findArrayIndex(array, text) {
    if(array.includes(text)) {
        const index = array.indexOf(text);
        console.log(index);
    }
    else console.log('Palabra no encontrada.');
 //   let j = 0;
   // for (let i = 0 ; i < array.length ; i++) {
     //   if (array[i] == text) {
       //     j = 1;
   //         console.log(i);
    //    }
  //  }
   // if (j != 1) {
   //     console.log('Palabra no encontrada.');
   // }
}
findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Caracol');
findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Mosquito');
findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Salamandra');
findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Ajolote');
findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Pepino');