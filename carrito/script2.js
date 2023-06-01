const productos = [
    { nombre: 'Producto 1', precio: 10 },
    { nombre: 'Producto 2', precio: 20 },
    { nombre: 'Producto 3', precio: 30 },
  ];
  
  const carrito = [];
  
  const datosClienteForm = document.querySelector('#datosCliente');
  const carritoTable = document.querySelector('#carrito');
  const tbody = carritoTable.querySelector('tbody');
  const total = carritoTable.querySelector('#total');
  const membresia = carritoTable.querySelector('#membresia');
  const aplicarDescuento = carritoTable.querySelector('#aplicarDescuento');
  const finalizarCompra = carritoTable.querySelector('#finalizarCompra');
  const ticket = document.querySelector('#ticket');
  
  let nombreCliente;
  let direccionCliente;
  
  datosClienteForm.addEventListener('submit', event => {
    event.preventDefault();
    nombreCliente = event.target.elements.nombre.value;
    direccionCliente = event.target.elements.direccion.value;
    datosClienteForm.hidden = true;
    carritoTable.hidden = false;
  });
  
  function agregarProducto(producto) {
    const indice = carrito.findIndex(item => item.nombre === producto.nombre);
    if (indice !== -1);
  }
