const button$$ = document.querySelector('button').addEventListener('click', function () { busca(); });
let texto$$ = document.querySelector('input');
const div$$ = document.querySelector('#padre');
busca = () => {
  fetch('https://breakingbadapi.com/api/characters')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    const datos = [...myJson];
    muestraResultados(datos);
  });
}
muestraResultados = (datos) => {
  while (div$$.firstChild) div$$.removeChild(div$$.lastChild);
  for (const personaje of datos) {
    const { name, img, birthday, status } = personaje;
    const aa = texto$$.value.toLowerCase();
    const spl = aa.split(' ');
    for (let i = 0 ; i < spl.length ; i++) {
      spl[i] = spl[i].charAt(0).toUpperCase() + spl[i].slice(1);
    }
    const upp = spl.join(' ');
    console.log(upp);
    if(name.includes(upp)) {
      const div2$$ = document.createElement('div');
      const name$$ = document.createElement('p');
      const img$$ = document.createElement('img');
      const bday$$ = document.createElement('p');
      const stat$$ = document.createElement('p');
      name$$.textContent = name;
      div2$$.appendChild(name$$);
      img$$.src = img;
      img$$.style.width = '200px';
      div2$$.appendChild(img$$);
      bday$$.textContent = birthday;
      div2$$.appendChild(bday$$);
      stat$$.textContent = status;
      div2$$.appendChild(stat$$);
      div$$.appendChild(div2$$);
    }
  }
}