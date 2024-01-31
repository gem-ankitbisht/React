import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import SlideBar from './Components/Slidebar';
import MainScreen from './Components/MainScreen';
import UserList from './Components/UserList';
function App() {
    const[showSlidebar, setShowSlidebar] = useState(true);

    const toggleSlidebar = () =>{
      setShowSlidebar(!showSlidebar);
    };
  return (
    <div className="App">
      <Navbar toggleSlidebar={toggleSlidebar}/>
      <div className='content'>
       {showSlidebar && <SlideBar/>}
       
      <Router>
        <Routes>
          <Route exact path="/" element={ <MainScreen/>}/>
          <Route path="/UserList" element={ <UserList/>}/>
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
