const baseUrl = 'https://api.nationalize.io?name=';
const texto$$ = document.querySelector('input');
const busqueda = () => {
  fetch(baseUrl + texto$$.value)
    .then((response) => {
    return response.json();
    })
    .then((myJson) => {
    console.log(myJson);
    });
}
const boton$$ = document.querySelector('button').addEventListener('click', busqueda);
