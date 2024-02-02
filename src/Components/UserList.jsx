import React, { useState, useEffect } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import UserDataDashboard from "./UserDataDashboard";

const UserList = () => {
  const [profileDetail, setProfileDetail] = useState([]);
  const [userDetail, setUserDetail] = useState(1);
  const [isModalOpen, setUserModalOpen] = useState(false);
  const openModal = (id) => {
    setUserDetail(id);
    setUserModalOpen(true);
  };
  const closeUserModal = () => {
    setUserModalOpen(false);
  };
  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      setProfileDetail(res.data.results);
      //setName(res.data.name)
      //setLocation(res.data.origin.name);
    });
    Axios.get("https://rickandmortyapi.com/api/character/1").then((res) => {
      setUserDetail(res);
      console.log(res);
    });
  }, []);
  

  const visibleCOl = ["name", "status", "species", "image"];
  return (
    <div
      className="container card overflow-auto main-screen"
      style={{ width: "100vw", height: "100vh" }}
    >
      <h2>Character List</h2>
      <hr></hr>
      <div className="card">
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Profile Image</th>
            <th>Name</th>
            <th>status</th>
            <th>species</th>
          </tr>
        </thead>
        <tbody>
          {profileDetail.map((emp) => (
            <tr key={emp.id}>
              <td>
                <img src={emp.image} style={{ width: "100px" }}></img>{" "}
              </td>
              <td>
                <span
                  onClick={() => openModal(emp.id)}
                  style={{ color: "blue", cursor: "pointer" }}
                >
                  {emp.name}
                </span>
              </td>
              <td>{emp.status}</td>
              <td>{emp.species}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <Modal
        show={isModalOpen}
        onRequestClose={closeUserModal}
        backdrop="static"
        contentLable="Employee Detail Modal"
      >
        <Modal.Header> Character Details</Modal.Header>
        <Modal.Body>
          <UserDataDashboard id={userDetail}></UserDataDashboard>
        </Modal.Body>
        <Modal.Footer>
          <Button varity="primary" onClick={closeUserModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserList;
