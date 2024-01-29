import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Navbar from './Components/Navbar';
import SlideBar from './Components/Slidebar';
import MainScreen from './Components/MainScreen';
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
        <MainScreen/>
      </div>
    </div>
  );
}

export default App;
