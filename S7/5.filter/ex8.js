const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];
text$$ = document.querySelector('[data-function="toFilterStreamers"]');
input$$ = document.querySelector('[data-function="toShowFilterStreamers"]');
search = () => {
    const find = streamers.filter(streamer => streamer.name.includes(input$$.textContent));
}
show = () => console.log(find);
text$$.addEventListener('input', search);
input$$.addEventListener('click', show ());