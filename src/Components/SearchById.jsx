import React, { useState, useEffect } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import UserDataDashboard from "./UserDataDashboard";

const SearchById = () => {
  const [profileDetail, setProfileDetail] = useState([]);
  const [userDetail, setUserDetail] = useState(1);
  const [isModalOpen, setUserModalOpen] = useState(false);
  const [userid, setuserid] = useState(1);
  const openModal = () => {
    const searchid = document.getElementById("searchid").value;
    setuserid(searchid);
    debugger
    if(searchid < 1){
      alert("please enter value greater than 0")
      return
    }
    else if(searchid == ""){
      alert("please enter a id")
      return
    }
    else if(!isNumber(searchid)){
      alert("please enter number only")
      return
    }
    setUserModalOpen(true);
  };
  const closeUserModal = () => {
    setUserModalOpen(false);
  };

  const isNumber = (n)=>  { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 
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
        <input typeof="text" id="searchid" ></input>
        <button 
          onClick={openModal}
        >
          <i class="bi bi-search"> seacrh </i>
        </button>
      </div>
      <Modal
        show={isModalOpen}
        onRequestClose={closeUserModal}
        backdrop="static"
        contentLable="Employee Detail Modal"
      >
        <Modal.Header> Character Details</Modal.Header>
        <Modal.Body>
          <UserDataDashboard id={userid}></UserDataDashboard>
        </Modal.Body>
        <Modal.Footer>
          <Button varity="primary" onClick={closeUserModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SearchById;
