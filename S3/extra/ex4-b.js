const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];
for (const elemento of countries) {
    let div$$ = document.createElement('div');
    let h4$$ = document.createElement('h4');
    let img$$ = document.createElement('img');
    h4$$.innerHTML = elemento.title;
    div$$.appendChild(h4$$);
    img$$.src = elemento.imgUrl;
    div$$.appendChild(img$$);  
    document.body.appendChild(div$$);  
}
const button$$ = document.querySelector('button').addEventListener('click', removeElement);
function removeElement (event) {
    const listadiv$$ = document.querySelectorAll('div');
    listadiv$$[listadiv$$.length - 1].remove();
}