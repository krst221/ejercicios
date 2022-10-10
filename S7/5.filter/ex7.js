const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];
input$$ = document.querySelector('[data-function="toFilterStreamers"]');
search = () => {
    const find = streamers.filter(streamer => streamer.name.includes(input$$.textContent));
    console.log(find);
}
input$$.addEventListener('input', search);