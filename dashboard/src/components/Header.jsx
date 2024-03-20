import React from 'react';
import Register from './Register';
import {Route, Link, Routes} from "react-router-dom";

/* import foto from '../assets/images/jordan-walke.png'; */

function Header(){
    return(
        <React.Fragment>
				
				<div /* className="header-buttons" */ className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <nav>
            <div className="product-nav">
                <ul>
                    <li><a className="nav-button" href="/products">Productos</a></li>
                    <li><a className="nav-button" href="/products/create">Vender</a></li>
                    <li><a className="nav-button" href="/products/productCart">Carrito <i
                                className="fas fa-shopping-basket"></i></a></li>
                </ul>
            </div>
        </nav>
        <div>
            <form action="/search" method="get">
                <div className="input">
                    <input type="text" name="keyword" placeholder="Buscar ..." className="search-bar"/>
                </div>
                <div className="submit">
                    <button type="submit" className="bnt-search"><i className="fa fa-search" aria-hidden="true"></i></button>
                </div>
            </form>
        </div>
        <nav>
            <div className="user-nav">
            {/*  if(locals.isLogged) { 
                    <ul className="profileUser">
                        <li><a href="#" id="dropUser" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="/img/users/ locals.userLogged.avatar" width="35"
                                    style="border-radius: 100%;"/>
                                Hi  locals.userLogged.firstName 
                            </a>
                        <li><a href="/users/profileUser"><i className="fa-regular fa-user"></i>Mi Perfil</a></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <a href="/users/logout"><i className="fa-solid fa-arrow-right-from-bracket"></i>Cerrar Sesión</a>
                        </li>
                    </ul>
                     } else {  */}
                        <ul>
                            <li><a className="nav-button" href="/users/login">Iniciar Sesión </a></li>
                            <Link to="/users/register" exact="true">Registrarse</Link>

                        </ul>
                        
                       {/*  } */}
                       
            </div>
        </nav>
    </div>

				{/*<!-- End of Topbar -->*/}

        </React.Fragment>
    )
}
export default Header;