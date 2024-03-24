import React, { useEffect, useState } from 'react';
import MediaCard from './MediaCard';
//import Categories from './Categories';


    function Products() {
        const [products, setProducts] = useState([]);
        const [totalProducts, setTotalProducts] = useState([])
        const apiProducts = async()=>{
            try {
            const respuesta = await fetch('/api/products')  
            const data = await respuesta.json()
            console.log('meta', data.meta)
            setProducts(data.data)
            setTotalProducts(data.meta)
            } catch (error) {
                console.log(error.mesagge)
            }
        }
        useEffect(() => {
            console.log('%cse monto el componente', 'color: yellow');
                apiProducts()
        },[]);

        useEffect(() => {
            console.log('%cse actualizo', 'color: yellow');
        }, [totalProducts])
        
        return (
            <div>
                <React.Fragment>
                 
                    <div className="col-lg-20 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-gray-800">Productos</h6>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    {products.length === 0 && <p>Cargando...</p>}
                                    {
                                        products.map((product,i)=>{
                                            return <MediaCard {...product} key={i} />
                                           
                                            })
                                    }  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
            <div className={`card border-left-shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text- text-uppercase mb-1`}> Total productos</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{ totalProducts.count }</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                </React.Fragment> 
            </div>
        )
    }

/* } */


export default Products;