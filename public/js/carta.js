// Cargar datos desde el archivo JSON
  fetch('https://backend-ldzw.onrender.com/clientes/carta')
//   fetch("http://localhost:3000/clientes/carta")
  
   .then((response) => response.json())
  .then((data) => {
    const menuList = document.getElementById("CartaTarjetas");

    Object.keys(data).forEach((categoria) => {
      const categoriaData = data[categoria];

      categoriaData.productos.forEach((item) => {
        const divContenedor = document.createElement("div");
        divContenedor.className = "divContenedor";
        divContenedor.innerHTML = `
          <div>
            <p class='titulo'>    
              ${item.nombre}            
            </p> 
            <img src="${item.imagen}" class="imgCss"/>
            <p class= 'titulo'> 
              $${item.precio}
            </p>          
          </div>   
        `;
        menuList.appendChild(divContenedor);
      });
    });
  })
  .catch((error) => console.error("Error al traer los datos del Json:", error));
