import React from "react";

import Footer from "./Footer";
import TopBar from "./TopBar";
import LastProductInDb from "./LastProductInDb";
//import Products from "./Products";
import Users from "./Users";
import NotFound from "./NotFound";
import { Route, Routes } from "react-router-dom";
import ContentRow from "./ContentRow";



function ContentWrapper() {
  return (
    <React.Fragment>
      {/*<!-- Content Wrapper -->*/}
      <div id="content-wrapper" className="d-flex flex-column">
        {/*<!-- Main Content -->*/}
        <div id="content">
          <TopBar />

          <Routes>
            <Route exact path="/" component={<ContentWrapper/>} />
            <Route path="/products" exact={true} element={<ContentRow />}></Route>
            <Route
              path="/LastProductInDb"
              exact={true}
              element={<LastProductInDb/>}
            ></Route>
            <Route path="/users" exact={true} element={<Users/>}></Route>
            <Route component={NotFound} />
          </Routes>
          
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
export default ContentWrapper;
