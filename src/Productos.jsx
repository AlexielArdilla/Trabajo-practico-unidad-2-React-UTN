import { useEffect, useState } from "react";
import Producto from "./Producto";
import { getAllProductos } from "./Services/productosService";

function Productos(){

  const [loading,setLoading] = useState(true)
  const [productos,setProductos] = useState([])
  const [titulo,setTitulo] = useState('Listado de productos')

  useEffect(
    ()=>{
      const request = async ()=>{
        try{
          const response = await getAllProductos()
          // const response = await res.json()
          console.log("🚀 ~ file: Productos.jsx:25 ~ request ~ response:", response.results)
          setProductos(response.results)
          setLoading(false)
        }catch(e){
          console.log(e)
        }
        
      }

      request()
      
      
    },
    []
  )
  
  const handleClick = ()=>{
    setTitulo("Listado productos filtrado")
    setProductos([
      { id: 1, title: "Samsung", price: "$1000", categoria: "Celulares" },
      { id: 2, title: "Samsung 2", price: "$2000", categoria: "Celulares" },
    ])
  }
  
  if(loading){
    return(
      <div>Cargando...</div>
    )
  }else{
    return (
      <>
          <h1>{titulo}</h1>
          {productos.map((producto) => 
            <Producto
              imagen={producto.thumbnail}
              nombre={producto.title}
              precio={producto.price}
              categoria=""
            />
          )}
          <button onClick={handleClick}>Filtrar</button>
      </>
    );
  }
  
}

export default Productos;
