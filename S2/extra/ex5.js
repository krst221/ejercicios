function rollDice(maxNum) {
    numb = Math.trunc(Math.random()*maxNum + 1);
    if (numb < 1) console.log('El número es 1.');
    else console.log('El numero es ' + numb + '.');
}
rollDice(6);
rollDice(2);
rollDice(165);
rollDice(33);