import React from 'react';
//import ChartRow from './ChartRow.js';
import { useEffect, useState } from 'react';

/* let tableRowsData = [
    {
        Title: 'Billy Elliot ',
        Length: '123',
        Rating: '5',
        Categories: ['Drama','Comedia'],
       
    },
    {
        Title: 'Alicia en el país de las maravillas',
        Length: '142',
        Rating: '4.8',
        Categories: ['Drama','Acción','Comedia'],
        
    },
    
] */


function Chart (){
    const [totalUsers, setTotalUsers] = useState([])
        const apiUsers = async()=>{
            try {
            const respuesta = await fetch('/api/users')  
            const data = await respuesta.json()
            console.log('data', data)
            setTotalUsers(data.data)
            } catch (error) {
                console.log(error.mesagge)
            }
        }
        useEffect(() => {
            console.log('%cse monto el componente', 'color: yellow');
           /*  fetch('/api/products')
                .then((respuesta )=> respuesta.json())
                .then((data) => {
                    console.log(data);
                    setTotalProducts(data.data)
                })
                .catch((error) => console.log(error)); */
                apiUsers()
        },[]);

        useEffect(() => {
            console.log('%cse actualizo', 'color: yellow');
        }, [totalUsers])
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Email</th>
                                <th>Rol</th>
                            </tr>
                        </thead>
                        {/* <tfoot>
                            <tr>
                                <th>Título</th>
                                <th>Duración</th>
                                <th>Rating</th>
                                <th>Género</th>
                                <th>Premios</th>
                            </tr>
                        </tfoot> */}
                        <tbody>
                            {/* {
                            totalUsers.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            } */}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;