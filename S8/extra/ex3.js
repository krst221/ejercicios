pillaPedidos = async () => {
    const res = await fetch('http://localhost:3000/orders');
    const pedidos = await res.json();
    asignaPedidos(ordenaPedidos(pedidos));
}

ordenaPedidos = (pedidos) => pedidos.sort((a,b) => new Date(b.date) - new Date(a.date));

asignaPedidos = async (pedidos) => {
    for (pedido of pedidos) {
        const {id , date , products} = pedido;
        for(let i = 0 ; i < products.length ; i++) {
            const res = await fetch ('http://localhost:3000/products/' + products[i].productId)
            const detalles = await res.json();
            products[i] = {...products[i] , ...detalles}
            console.log(products[i]);
        }
        pintaPedido(pedido);
    }
}
pintaPedido = (pedido) => {
    const div$$ = document.createElement('div');
    const date$$ = document.createElement('h1');
    date$$.textContent = pedido.date;
    div$$.appendChild(date$$);
    for (producto of pedido.products) {
        const {name , quantity} = producto;
        const divp$$ = document.createElement('div');
        divp$$.innerHTML = `<h4>Producto: </h4><span>${name}</span><h4> Cantidad: </h4><span>${quantity}</span>`;
        div$$.appendChild(divp$$);
    }
    document.body.appendChild(div$$);
}

pillaPedidos();