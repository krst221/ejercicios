function focus (event) {
    console.log(event.target.value);
}
const valorinput$$ = document.querySelector('input').addEventListener('focus', focus);