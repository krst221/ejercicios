const baseUrl = 'https://api.nationalize.io?name=';
const texto$$ = document.querySelector('input');
const busqueda = () => {
    fetch(baseUrl + texto$$.value)
      .then((response) => {
      return response.json();
      })
      .then((myJson) => {
      muestraResultados(myJson);
      });
}
const boton$$ = document.querySelector('button').addEventListener('click', busqueda);
const muestraResultados = (myJson) => {
    for (let i = 0 ; i < myJson.country.length ; i++) {
        const ps$$ = document.createElement('p');
        let texto = [];
        texto+= ['El nombre ' + myJson.name + ' tiene un ' + Math.round(myJson.country[i].probability * 100) + '% de ser de ' + myJson.country[i].country_id + ' '];
        ps$$.textContent = texto;
        const boton$$ = document.createElement('button');
        boton$$.textContent = 'Elimina';
        ps$$.appendChild(boton$$);
        boton$$.addEventListener('click', function () {
            ps$$.remove();
        })
        document.body.appendChild(ps$$);
    }
}