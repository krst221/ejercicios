const allDiv$$ = document.querySelectorAll('.fn-insert-here');
const p$$ = document.createElement('p');
p$$.textContent = 'Voy dentro!';
for (const div$$ of allDiv$$) {
    div$$.appendChild(p$$);
}