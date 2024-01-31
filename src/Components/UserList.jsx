import React ,{useState, useEffect} from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function UserList(){

    const [profileDetail, setProfileDetail] = useState([]);
    //const [name, setName] = useState("")
    //const [location, setLocation] = useState("")
    //const id = Math.floor(Math.random()*827);
    useEffect(()=>{
        
        Axios.get('https://rickandmortyapi.com/api/character').then((res)=>{
        setProfileDetail(res.data.results)
        //setName(res.data.name)
        //setLocation(res.data.origin.name);
    })
    },[])
    const visibleCOl = ['name','status','species','image']
    return(
        <div className="container overflow-auto" style={{width:'100vw', height: '100vh'}}>
            <h1>User List</h1>
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                    <th>
                    Profile Image
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                    status
                    </th>
                    <th>
                    species
                    </th>
                  
                    </tr>
                </thead>
                <tbody>
                {profileDetail.map(emp => (
                            <tr key={emp.id}>
                                <td><img src={emp.image} style={{width: '100px'}}></img> </td>
                                <td>{emp.name}</td>
                                <td>{emp.status}</td>
                                <td>{emp.species}</td>
                                
                            </tr>
                        ))}
                </tbody>
            </table>
        {  console.log(profileDetail)}
        </div>
    );
} 

export default UserList