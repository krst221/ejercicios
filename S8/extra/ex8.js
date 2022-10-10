const invocaGato = async () => {
    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const gato = await res.json();
    pintaGato(gato);
}

const boton$$ = document.querySelector("[data-fn='callACat']");
boton$$.addEventListener('click', invocaGato);

const pintaGato = (gato) => {
    const div$$ = document.createElement('div');
    const img$$ = document.createElement('img');
    img$$.src = gato[0].url;
    img$$.style.maxWidth = '300px';
    const eli$$ = document.createElement('button');
    eli$$.addEventListener('click', () => {
        eliminaGato(div$$);
        const audio = new Audio('https://www.google.com/logos/fnbx/animal_sounds/cat.mp3');
        audio.play();
    });
    eli$$.textContent = 'Mátame';
    div$$.appendChild(img$$);
    div$$.appendChild(eli$$);
    document.body.appendChild(div$$);
}

const eliminaGato = (div) => div.remove();