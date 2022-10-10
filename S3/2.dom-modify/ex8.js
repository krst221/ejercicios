const div$$ = document.querySelectorAll('div');
const p$$ = document.createElement('p');
p$$.innerHTML = `Voy en medio!`;
document.body.insertBefore(p$$,div$$[1]);