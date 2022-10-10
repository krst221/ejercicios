const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
let lista$$ = document.createElement('ul');
for (let i = 0 ; i < countries.length ; i++) {
    const li$$ = document.createElement('li');
    li$$.innerHTML = countries[i];
    lista$$.appendChild(li$$);
}
document.body.appendChild(lista$$);