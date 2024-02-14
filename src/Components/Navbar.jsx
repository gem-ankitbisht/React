import React,{useState} from "react";
import GM from'./GM.jpg';
import RM from './Rick.jpg'
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal,Button } from "react-bootstrap";
//import Modal from 'react-modal'

const Navbar = (props) => {
    const employee =[]; 
    const {toggleSlidebar} = props;
    const [isModalOpen, setModalOpen] = useState(false);
    const [editedEmployee, setEditedEmployee] = useState({...employee});
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = () => {
        console.log(isModalOpen);
        setModalOpen(true);
    }
    const closeModal =() =>{
        setModalOpen(false);
    }

    const handelInputChanges = (e) =>{
        const{name, value}= e.target;
        setEditedEmployee((preEmp) =>({
            ...preEmp, [name]:value,
        }));
    }
    const saveinfo = () =>{
        console.log(editedEmployee);
        if(Object.keys(editedEmployee).length != 6){
          alert("All fields are mandatory");
          return
        }
        closeModal();
        alert(`Your form has been submitted for`+ editedEmployee.FirstName+`
        `);
        setEditedEmployee({...employee});
    }
    //console(toggleSlidebar);
    //console.log(props);

    return (
      <div className="navbar">
      
        <div>
          <Button
            variant="primary"
            className="toggle-button navbar-toggler"
            onClick={toggleSlidebar}
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <img src={RM} alt="logo" className="logoimg" />
        </div>
        <div className="profile">
          <button onClick={openModal} className="btn btn-primary">Profile</button>
          <form>
          <Modal
            show={isModalOpen}
            onRequestClose={closeModal}
            backdrop="static"
            contentLable="Employee Detail Modal"
          >
            <Modal.Header> Employee Details</Modal.Header>
            <Modal.Body>
              
                <div className="row">
                  <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                    {selectedImage && (
                      <div>
                        <img
                          alt="not found"
                          width={"100px"}
                          height={"100px"}
                          style={{borderRadius: "50%", alignContent:"center"}}
                          src={URL.createObjectURL(selectedImage)}
                        />
                        <br />
                        <button onClick={() => setSelectedImage(null)}>
                          Remove
                        </button>
                      </div>
                    )}
                    </div>
                    <input
                      type="file"
                      name="myImage"
                      onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSelectedImage(event.target.files[0]);
                      }}
                    />
                    
                  
                  <div className="col-md-6">
                    <lable>
                      First Name:
                      <input
                        type="text"
                        name="FirstName"
                        value={editedEmployee.FirstName}
                        onChange={handelInputChanges} required
                      ></input>
                    </lable>
                  </div>
                  <div className="col-md-6">
                    <lable>
                      Last Name:
                      <input
                        type="text"
                        name="LastName"
                        value={editedEmployee.LastName}
                        onChange={handelInputChanges} required
                      ></input>
                    </lable>
                  </div>
                  <div className="col-md-6">
                    <lable>
                      Status:
                      <input
                        type="text"
                        name="Status"
                        value={editedEmployee.Status}
                        onChange={handelInputChanges} required
                      ></input>
                    </lable>
                  </div>
                  <div className="col-md-6">
                    <lable>
                      Species:
                      <input
                        type="text"
                        name="Species"
                        value={editedEmployee.Species}
                        onChange={handelInputChanges} required
                      ></input>
                    </lable>
                  </div>
                  <div className="col-md-6">
                    <lable>
                      Gender:
                      <br></br>
                      {/* <input
                                type = "text"
                                name = "address"
                                value = {editedEmployee.address}
                                onChange={handelInputChanges}></input> */}
                      <select style={{ width: "85%", height: "30px" }} name = "Gender" value={editedEmployee.selected} onChange={handelInputChanges} required>
                      <option selected="true">Select</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </lable>
                  </div>
                  <div className="col-md-6">
                    <lable>
                      Origin:
                      <input
                        type="text"
                        name="Origin"
                        value={editedEmployee.Origin}
                        onChange={handelInputChanges} required
                      ></input>
                    </lable>
                  </div>
                </div>
             
            </Modal.Body>
            <Modal.Footer>
              <Button varity="primary" type="submit" onClick={saveinfo}> Save</Button>
              <Button varity="" onClick={closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          </form>
        </div>
       
      </div>
    );
}

export default Navbar;