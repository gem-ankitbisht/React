import React from "react";
import { BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import MainScreen from "./MainScreen";
function SlideBar(){
    return(
        <Router>
            <div className="slidebar">
            Vertical Menu 
            <ul>
                <li> <Link to="/"> Dashboard</Link> </li>
                <li> <Link to="/UserList"> Users List</Link> </li>
            </ul>
        </div>
        <Routes>
         
        </Routes>
        </Router>
        
    );
};
export default SlideBar;