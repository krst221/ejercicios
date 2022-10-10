const planetas$$ = document.querySelector('[data-function="planets"]');
const personajes$$ = document.querySelector('[data-function="characters"]');
const busca$$ = document.querySelector('[data-function="search"]');

fetch('http://localhost:3000/planets')
    .then(res => res.json())
    .then(myJson => {
        const planetas = myJson;
        dibujaPlanetas(planetas);
    });

const dibujaPlanetas = (planetas) => {
    for (const planeta of planetas) {
        const planeta$$ = document.createElement('div');
        planeta$$.addEventListener('click', () => obtenPersonajes(planeta.id));
        const img$$ = document.createElement('img');
        const name$$ = document.createElement('h2');
        img$$.src = planeta.image;
        img$$.style.height = '300px';
        name$$.textContent = planeta.name;
        planeta$$.appendChild(img$$);
        planeta$$.appendChild(name$$);
        planetas$$.appendChild(planeta$$);
    } 
}

const obtenPersonajes = (id) => {
    fetch('http://localhost:3000/characters?idPlanet=' + id)
    .then(res => res.json())
    .then(myJson => {
        const personajes = myJson;
        dibujaPersonajesYBarra(personajes);
    });
}

const dibujaPersonajesYBarra = (personajes) => {
    while (personajes$$.firstChild) personajes$$.removeChild(personajes$$.lastChild);
    creaBarraBusqueda();
    for (const personaje of personajes) {
        const personaje$$ = document.createElement('div');
        const img$$ = document.createElement('img');
        const name$$ = document.createElement('h2');
        name$$.classList.add('nombre');
        name$$.style.textAlign = 'center';
        img$$.src = personaje.avatar;
        img$$.style.height = '300px';
        name$$.textContent = personaje.name;
        personaje$$.appendChild(img$$);
        personaje$$.appendChild(name$$);
        personajes$$.appendChild(personaje$$);
    }
}

const creaBarraBusqueda = () => {
    while (busca$$.firstChild) busca$$.removeChild(busca$$.lastChild);
    const input$$ = document.createElement('input');
    const boton$$ = document.createElement('button');
    boton$$.textContent = 'Buscar';
    busca$$.appendChild(input$$);
    busca$$.appendChild(boton$$);
    console.log(input$$.textContent);
    boton$$.addEventListener('click', () => buscaPersonajes(input$$.value));
}
const buscaPersonajes = (texto) => {
    console.log(texto);
    for (let i = 0 ; i < personajes$$.childNodes.length ; i++) {
        personajes$$.childNodes[i].style.display = 'block';
    }
    for (let i = 0 ; i < personajes$$.childNodes.length ; i++) {
        const nombre$$ = personajes$$.childNodes[i].getElementsByClassName('nombre');
        if(nombre$$[0].textContent != texto) personajes$$.childNodes[i].style.display = 'none';
    }
}