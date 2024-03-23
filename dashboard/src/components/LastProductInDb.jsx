import React from 'react';

import { useEffect, useState } from 'react';

function LastProductInDb(){
const [lastProduct, setLastProduct] = useState([])
const ultimoPr = async()=>{
    try {
    const respuesta = await fetch('/api/products/:id')  
    const data = await respuesta.json()
    const ultimo = data.data.pop(); // Obtener el último elemento del array
    console.log('ulitmo', ultimo)
    setLastProduct(ultimo);
} catch (error) {
    console.log(error.mesagge)
}
}
useEffect(() => {
    console.log("%cse monto el componente", "color: yellow");
    ultimoPr()
}, [])

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto creado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        
                        {/* <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={lastProduct.image} alt=" Star Wars - Mandalorian "/> */}
                    </div>
                    <p>{lastProduct.name}</p>
                    {/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a> */}
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
