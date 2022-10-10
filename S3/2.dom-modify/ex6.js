const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let ul$$ = document.createElement('ul');
for (let i = 0 ; i < apps.length ; i++) {
    const li$$ = document.createElement('li');
    li$$.innerHTML = apps[i];
    ul$$ = document.body.appendChild(li$$);
}
document.body.appendChild(ul$$);