import React, { useState, useEffect } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import UserDataDashboard from "./UserDataDashboard";

const Episodes = () => {
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
    Axios.get("https://rickandmortyapi.com/api/episode").then((res) => {
      setLocations(res.data.results);
      console.log(location);
    });
  }, []);

  const visibleCOl = ["name", "status", "species", "image"];
  return (
    <div
      className="container card overflow-auto main-screen"
      style={{ width: "100vw", height: "100vh" }}
    >
      <h2>Episodes List</h2>
      <hr></hr>
      <div className="card">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Air Date</th>
              <th>Episode</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {location.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.air_date}</td>
                <td>{emp.episode}</td>
                <td>{emp.created}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Episodes;
