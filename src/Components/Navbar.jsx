import React,{useState} from "react";
import GM from'./GM.jpg';
//import Modal from 'react-modal'

function Navbar(props){
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
                <button className="toggle-button navbar-toggler" onClick={toggleSlidebar}>
                <span className="navbar-toggler-icon"></span>
                </button>
                <img src={GM} alt="logo" className="logoimg" />
            </div>
            <div className="profile" >
                 <button onClick={openModal}>Profile</button>
            
                 {isModalOpen && <modal isOpen={isModalOpen} 
                onRequestClose={closeModal}
                contentLable = "Employee Detail Modal">
                    <h2> Employee Details</h2>
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
                        <button >save</button>
                        <button onClick={closeModal}>close</button>
                    </form>
                </modal>}
                </div>
        </div>
    );
}

export default Navbar;