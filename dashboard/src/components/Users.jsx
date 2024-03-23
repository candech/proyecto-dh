import React from "react";
import ChartRow from "./ChartRow.js";
import { useEffect, useState } from "react";

function Users() {
  const [userList, setUserList] = useState([]);
  const [totalUser, setTotalUser] = useState([]);
  const apiUsers = async () => {
    try {
      const respuesta = await fetch("/api/users");
      const data = await respuesta.json();
      setUserList(data.data);
      setTotalUser(data.meta);
    } catch (error) {
      console.log(error.mesagge);
    }
  };
  useEffect(() => {
    console.log("%cse monto el componente", "color: yellow");
    /*  fetch('/api/products')
                .then((respuesta )=> respuesta.json())
                .then((data) => {
                    console.log(data);
                    setTotalProducts(data.data)
                })
                .catch((error) => console.log(error)); */
    apiUsers();
  }, []);

  useEffect(() => {
    console.log("%cse actualizo", "color: yellow");
  }, [userList]);
  return (
    <React.Fragment>
      {/*<!-- Content Row -->*/}
      {/*  <div className="row">
        </div> */}

      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Email</th>
                  <th>Rol</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((users, i) => {
                  return <ChartRow {...users} key={i} />;
                })}
              </tbody>
            </table>
            <div className={`card border-left-shadow h-100 py-2`}>
              <div className="card-body">
                
                  <div className="col mr-2">
                    <div className={`text-xs font-weight-bold text- text-uppercase mb-1`}>
                      
                      Total usuarios
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      {totalUser.count}
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Users;
