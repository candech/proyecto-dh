import React from 'react';

function MediaCard(props){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4" >
                <div className='card shadow mb-4'>
                    <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">{props.name}</h5>
                    </div>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                             <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 30 +'rem'}} src={props.image} alt='' /> 
                                <div className="h5 mb-0 font-weight-bold text-gray-800"> ${props.price}</div>
                                <div className={`text-xs font-weight-bold text-uppercase mb-1`}>{props.description}</div>
                            </div>
                            <div className="col-auto">
                                {/* <i className={`fas ${props.icono} fa-2x text-gray-300`}></i> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default MediaCard;