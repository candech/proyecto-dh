import React from 'react';
import Categories from './Categories';
import Products from './Products';


function ContentRow(){
    return (
        <>
            <div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="text center h3 mb-0 text-gray-800">Dashboard</h1>
					</div>
                    <div className="card-header py-3">
					< Products/>
                            </div>
                    <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-gray-800">Categorias</h6>
					<Categories/>
                            </div>
				</div>
        
        </>
    )
}

export default ContentRow;