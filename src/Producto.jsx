function Producto({nombre,precio,categoria,imagen}){
  
  return (
    <div>
      <img src={imagen} alt="imagen del  producto"/>
      <h1>{nombre}</h1>
      <p>Precio ${precio}</p>
      <p>{categoria}</p>
      <button>Ver detalle</button>
    </div>
  );
}

export default Producto;
