const productos = [
    { nombre: 'Producto 1', precio: 10 },
    { nombre: 'Producto 2', precio: 20 },
    { nombre: 'Producto 3', precio: 30 },
  ];
  
  const carrito = [];
  
  const tbody = document.querySelector('#carrito');
  const total = document.querySelector('#total');
  const membresia = document.querySelector('#membresia');
  const aplicarDescuento = document.querySelector('#aplicarDescuento');
  
  function agregarProducto(producto) {
    const indice = carrito.findIndex(item => item.nombre === producto.nombre);
    if (indice !== -1) {
      carrito[indice].cantidad++;
      carrito[indice].subtotal = carrito[indice].cantidad * carrito[indice].precio;
      actualizarCarrito();
    } else {
      carrito.push({
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: 1,
        subtotal: producto.precio,
      });
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${producto.nombre}</td>
        <td>$${producto.precio.toFixed(2)}</td>
        <td>${carrito[carrito.length - 1].cantidad}</td>
        <td>$${carrito[carrito.length - 1].subtotal.toFixed(2)}</td>
      `;
      tbody.appendChild(tr);
      actualizarCarrito();
    }
  }
  
  function actualizarCarrito() {
    let subtotal = 0;
    carrito.forEach(item => subtotal += item.subtotal);
    total.textContent = `$${subtotal.toFixed(2)}`;
  }
  
  productos.forEach(producto => {
    const button = document.createElement('button');
    button.textContent = `Agregar ${producto.nombre} ($${producto.precio.toFixed(2)})`;
    button.addEventListener('click', () => agregarProducto(producto));
    document.body.appendChild(button);
  });
  
  aplicarDescuento.addEventListener('click', ());
  