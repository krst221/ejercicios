const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const div$$ = document.querySelector('[data-function="printHere"]');
const ul$$ = document.createElement('ul');
for (const li of cars) {
    let li$$ = document.createElement('li');
    li$$.textContent = li;
    ul$$.appendChild(li$$);
}
div$$.appendChild(ul$$);