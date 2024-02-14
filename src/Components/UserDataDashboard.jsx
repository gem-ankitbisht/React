import React, { useState, useEffect } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const UserDataDashboard = (props) => {
  const [id, setid] = useState(props.id);
  const [name, setname] = useState("");
  const [location, setLocation] = useState("");
  const [data, setData] = useState([]);
  const [origin, setOrigin] = useState([]);
  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character/" + id + "").then(
      (res) => {
        setData(res.data);
        setname(res.data.name);
        setLocation(res.data.location);
        setOrigin(res.data.origin);
        console.log(res.data);
      }
    );
  }, []);

  return (
    <>
      <div className="card">
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
      </div>
    </>
  );
};

export default UserDataDashboard;
