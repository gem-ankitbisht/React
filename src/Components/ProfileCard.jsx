import React from "react";
import GM from './GM.jpg'

function ProfileCard(){
    return(
            <div className="col-md-6">
            <div className="card widget">
                <div className="row">
                    <div className="col-md-4">
                        <img src="" alt="" className="profileImg"/>
                    </div>
                    <div className="col-md-4 PfData"> Employee Code - 0000
                                               Location - XYZ
                                               Joining Date  - dd/mm/yyy 
                    </div>
                    <div className="col-md-3"></div>
                    <div className="row border">
                    <div className="col-md-6" >
                        Admin
                        <br/>
                        Software Engineer L1
                    </div>
                    <div className="col-md-6">
                        <img src={GM} alt="logo" className="pfplogoimg" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProfileCard;