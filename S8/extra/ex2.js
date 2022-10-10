fetch('http://localhost:3000/diary')
.then(res => res.json())
.then(myJson => {
    const ordenado = ordenaNotasDiario(myJson);
    console.log(ordenado);
    creaNotasDiario(ordenado);
});
ordenaNotasDiario = (diario) => diario.sort((a,b) => new Date(a.date) - new Date(b.date));
creaNotasDiario = (diario) => {
    for(let i = 0 ; i < diario.length ; i++) {
        const div$$ = document.createElement('div');
        const h3$$ = document.createElement('h3');
        const h5$$ = document.createElement('h5');
        const p$$ = document.createElement('p');
        const boton$$ = document.createElement('button');
        boton$$.addEventListener('click', () => elimina(div$$));
        boton$$.textContent = 'Elimina';
        h3$$.textContent = diario[i].title;
        h5$$.textContent = diario[i].date;
        p$$.textContent = diario[i].description;
        div$$.appendChild(h3$$);
        div$$.appendChild(h5$$);
        div$$.appendChild(p$$);
        div$$.appendChild(boton$$);
        document.body.appendChild(div$$);
    }
}
elimina = (div) => div.remove();