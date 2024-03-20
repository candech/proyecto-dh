import React from 'react';
import Header from './Header';
// import ContentRowTop from './ContentRowTop';
// import Movie from './Movie';
import Footer from './Footer';
import {Route, Link, Routes} from "react-router-dom";
import Register from './Register';

function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <Header />
                    <ContentRowTop />
                    <Movie /> 
                    <Routes>
                        <Route path="/users/register" exact={true} element={<Register/>}></Route>
                    </Routes>
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;