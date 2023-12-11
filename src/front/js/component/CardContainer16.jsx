// import React, { useState, useEffect } from "react";
// import { Card } from "./Card.jsx";
// import SearchResults from "./SearchResults.jsx"; // Import the SearchResults component

// const CardContainer16 = ({ tipo }) => {
//   const [productos, setProductos] = useState([]);
//   const [cantidadVisible, setCantidadVisible] = useState(16);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetch(`https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/api/productos/tipo/${tipo}`)
//       .then((response) => response.json())
//       .then((data) => setProductos(data))
//       .catch((error) => console.error("Error fetching data:", error));
//     console.log("Error en el card16, tipo de vino", tipo);
//   }, [tipo]);

//   const filteredProductos = productos.filter(producto =>
//     producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="row">
//       <div>
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>
//       {/* Use the SearchResults component to display filtered products */}
//       <SearchResults productos={filteredProductos} />
//       {filteredProductos.length > cantidadVisible && (
//         <div className="col-12 d-flex justify-content-center mt-3">
//           <button
//             className="button-ver-mas-productos"
//             onClick={() => setCantidadVisible(cantidadVisible + 16)}
//           >
//             Ver más
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CardContainer16;
