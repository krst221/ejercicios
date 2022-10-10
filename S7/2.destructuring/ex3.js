const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};
const {name: nombre, race: raza} = animalFunction();
console.log (nombre , raza);