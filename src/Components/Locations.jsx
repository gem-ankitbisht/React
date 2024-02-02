import React, { useState, useEffect } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import UserDataDashboard from "./UserDataDashboard";

const Locations = ()=> {
  const [profileDetail, setProfileDetail] = useState([]);
  const [location, setLocations] = useState([]);
  const [isModalOpen, setUserModalOpen] = useState(false);
  const openModal = (id) => {
    setUserModalOpen(true);
  };
  const closeUserModal = () => {
    setUserModalOpen(false);
  };
  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/location").then((res) => {
        setLocations(res.data.results);
        console.log(location)
    });
  }, []);
  

  const visibleCOl = ["name", "status", "species", "image"];
  return (
    <div
      className="container card overflow-auto main-screen"
      style={{ width: "100vw", height: "100vh" }}
    >
      <h2>Locations List</h2>
      <hr></hr>
      <div className="card">
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Dimension</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {location.map((emp) => (
            <tr key={emp.id}>
              <td>
                  {emp.name}
              </td>
              <td>{emp.type}</td>
              <td>{emp.dimension}</td>
              <td>{emp.created}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Locations;
