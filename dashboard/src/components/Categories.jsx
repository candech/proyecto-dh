import React from 'react';

import { useEffect, useState } from 'react';

function Categories(){
    const [totalCategories, setTotalCategories] = useState([])
        const totalCategorias = async()=>{
            try {
            const respuesta = await fetch('/api/products')  
            const data = await respuesta.json()
            console.log(data.meta.countByCategory)
            setTotalCategories(data.meta.countByCategory)
            } catch (error) {
                console.log(error.mesagge)
            }
        }
        useEffect(() => {
            console.log('%cse monto el componente', 'color: yellow');
                totalCategorias()
        },[]);

    return (
    
        <div className="row">
             {totalCategories.length === 0 && <p>Cargando...</p>}
             <div className="col-md-4 mb-4">
            <div className={`card border-left-shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text- text-uppercase mb-1`}> En descuento</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{totalCategories.inSale}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className={`card border-left-shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text- text-uppercase mb-1`}> Ultimos agregados</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{totalCategories.visited}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className={`card border-left-shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text- text-uppercase mb-1`}> Veganas</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{totalCategories.vegan}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Categories;