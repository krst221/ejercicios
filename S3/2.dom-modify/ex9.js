const todosdiv$$ = document.querySelectorAll('.fn-insert-here');
for (let i = 0 ; i < todosdiv$$.length ; i++) {
    const p$$ = document.createElement('p');
    p$$.innerHTML = `Voy dentro!`;
    todosdiv$$[i].appendChild(p$$);    
}