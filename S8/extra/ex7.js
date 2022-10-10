const recogePelis = async () => {
    const res = await fetch('https://ghibliapi.herokuapp.com/films');
    const pelis = await res.json();
    pintaPelis(pelis);
}

const pintaPelis = (pelis) => {
    const {title, image} = pelis;
    const pelis$$ = document.createElement('div');
    pelis$$.classList.add('b-gallery');
    for(const peli of pelis) {
        const divp$$ = document.createElement('div');
        divp$$.classList.add('b-gallery__item');
        const title$$ = document.createElement('h1');
        title$$.classList.add('b-gallery__title');
        title$$.textContent = peli.title;
        divp$$.appendChild(title$$);
        const image$$ = document.createElement('img');
        image$$.src = peli.image;
        divp$$.appendChild(image$$);
        pelis$$.appendChild(divp$$);
    }
    document.body.appendChild(pelis$$);
}

recogePelis();