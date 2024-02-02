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
    //console(toggleSlidebar);
    //console.log(props);

    return(
        <div className="navbar">
            <div>
                <Button variant="primary" className="toggle-button navbar-toggler" onClick={toggleSlidebar}>
                <span className="navbar-toggler-icon"></span>
                </Button>
                <img src={RM} alt="logo" className="logoimg" />
            </div>
            <div className="profile" >
                 <button onClick={openModal}>Profile</button>
            
            <Modal show={isModalOpen}
                onRequestClose={closeModal}
                backdrop="static"
                contentLable = "Employee Detail Modal">
                    <Modal.Header> Employee Details</Modal.Header>
                    <Modal.Body>
                    <form>
                        <lable>
                            Name:
                            <input
                                type = "text"
                                name = "name"
                                value = {editedEmployee.name}
                                onChange={handelInputChanges}></input>
                        </lable>
                        <lable>
                            Email:
                            <input
                                type = "text"
                                name = "Email"
                                value = {editedEmployee.email}
                                onChange={handelInputChanges}></input>
                        </lable>
                        <lable>
                            Address:
                            <input
                                type = "text"
                                name = "address"
                                value = {editedEmployee.address}
                                onChange={handelInputChanges}></input>
                        </lable>
                    </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary"> Save</Button>
                        <Button varity="primary" onClick={closeModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
                </div>
        </div>
    );
}

export default Navbar;