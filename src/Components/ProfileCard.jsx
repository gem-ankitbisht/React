import React,{useState,useEffect} from "react";
import GM from './GM.jpg'
import RM from './Rick.jpg'
import Axios from "axios";

function ProfileCard(){
    const [profileDetail, setProfileDetail] = useState([]);
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const id = Math.floor(Math.random()*827);
    useEffect(()=>{
        
        Axios.get('https://rickandmortyapi.com/api/character/'+id).then((res)=>{
        setProfileDetail(res.data)
        setName(res.data.name)
        setLocation(res.data.origin.name);
    })
    },[])
    return(
            <div className="col-md-6">
            <div className="card widget">
                <div className="row">
                    <div className="col-xl-6">
                        <img src={profileDetail.image} alt="" className="profileImg"/>
                    </div>
                    <div className="col-xl-5 PfData"> Employee Code - {profileDetail.id} <br></br>
                                               Name - {name} <br></br>
                                               Location - {location}<br></br>
                                               Joining Date  - {profileDetail.created}<br></br>

                    </div>
                    <div className="col-xl-3"></div>
                    <div className="row border">
                    <div className="col-xl-6" >
                        {profileDetail.species}
                        <br/>
                        status : {profileDetail.status}
                    </div>
                    <div className="col-md-6">
                        <img src={RM} alt="logo" className="pfplogoimg" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProfileCard;