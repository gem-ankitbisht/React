import React, { useState, useEffect } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import UserDataDashboard from "./UserDataDashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

const UserDataDashboardName = (props) => {
  const [id, setid] = useState(props.id);
  const [name, setname] = useState("");
  const [location, setLocation] = useState("");
  const [data, setData] = useState([]);
  const [origin, setOrigin] = useState([]);
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
    Axios.get("https://rickandmortyapi.com/api/character/?name="+id+"").then((res) => {
      setProfileDetail(res.data.results);
      //setName(res.data.name)
      //setLocation(res.data.origin.name);
    });

    Axios.get("https://rickandmortyapi.com/api/character/1").then((res) => {
      setUserDetail(res);
      console.log(res);
     
  }

    );

   
}, []);

  return (
    <>
    <div
      className="container card overflow-auto main-screen"
      style={{ width: "30vw", height: "70vh" }}
    >
      <h2>Character List</h2>
      <hr></hr>
      <div className="card"></div>
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
      {/* <div className="card">
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <img
            className="card-img-top"
            src={data.image}
            style={{ height: "200px", width: "200px" }}
            alt="img"
          />
          <div class="card-body">
            <h5 class="card-title">Details of {name}</h5>
            <p class="card-text">
              Status: {data.status}
              <br></br>
              Species: {data.species}
              <br></br>
              Gender: {data.gender}
              <br></br>
              Location: {location.name}
              <br></br>
              Origin: {origin.name}
            </p>
            <p class="card-text">
              <small class="text-muted">Created on {data.created}</small>
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default UserDataDashboardName;
