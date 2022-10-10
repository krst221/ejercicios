const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
const categorias = [];
for (const pelis of movies) {
    for (const cat of pelis.categories) {
        if (!categorias.includes(cat)) categorias.push(cat);
    }
}
console.log(categorias);