const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];
const legends = streamers.filter(nombre => nombre.gameMorePlayed.includes('Legends'));
legends.filter(nombre => {if(nombre.age > 35) nombre.gameMorePlayed = nombre.gameMorePlayed.toUpperCase()});
console.log(legends);