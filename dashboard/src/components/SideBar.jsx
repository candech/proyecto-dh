import React from 'react';
import image from '../assets/images/logo1.png';
import ContentWrapper from './ContentWrapper';
import Products from './Products';
import LastProductInDb from './LastProductInDb';
import Users from './Users';
import NotFound from './NotFound';
import {Link, NavLink, Route, Routes} from 'react-router-dom';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - PIZZA ROCK</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Productos</span>
                    </NavLink>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <NavLink className="nav-link" to="/LastProductInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Ultimo producto creado</span></NavLink>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <NavLink className="nav-link" to="/users">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Usuarios</span></NavLink>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
           
            <Routes>
                <Route exact path="/" component={ContentWrapper}/>
                <Route path="/products" exact={true} element={Products}></Route>
                <Route path="/LastProductInDb" exact={true} element={LastProductInDb}></Route>
                <Route path="/users" exact={true} element={Users}></Route>
                <Route path='*' element={NotFound} />
            </Routes>
           
        </React.Fragment>
    )
}
export default SideBar;