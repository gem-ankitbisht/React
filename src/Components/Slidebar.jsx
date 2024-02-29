import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainScreen from "./MainScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";

const SlideBar = () => {
  return (
    <div className="slidebar navbar  flex-column" style={{ textAlign: "left" }}>
      <ul className=" list-unstyled components text-left">
        <li className="nav-item" style={{ margin: "20px", textAlign: "left" }}>
          <span class="glyphicon glyphicon-asterisk"></span>{" "}
          <Link to="/">
            <h5>Dashboard</h5>{" "}
          </Link>
        </li>
        <li className="nav-item" style={{ margin: "20px", textAlign: "left" }}>
          <Link to="/UserList">
            {" "}
            <h5>Character List</h5>
          </Link>
        </li>
        <li className="nav-item" style={{ margin: "20px", textAlign: "left" }}>
          <Link to="/Locations">
            <h5> Locations </h5>
          </Link>
        </li>
        <li className="nav-item" style={{ margin: "20px", textAlign: "left" }}>
          <Link to="/Episodes">
            <h5> Episodes</h5>
          </Link>
        </li>
        <li className="nav-item" style={{ margin: "20px", textAlign: "left" }}>
          <Link to="/SearchById">
            <h5> Search Character By Id</h5>
          </Link>
        </li>
        <li className="nav-item" style={{ margin: "20px", textAlign: "left" }}>
          <Link to="/SearchByName">
            <h5> Search Character By Name</h5>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default SlideBar;
