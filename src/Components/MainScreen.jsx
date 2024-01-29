import React from "react";
import Widget from "./Widget";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileCard from "./ProfileCard";
import Calendar from "./Calendar";

function MainScreen(){

    const W1data = [
        {id: 1, name: 'Ankit', Designation: 'SEL1'},
        {id: 2, name: 'XYZ', Designation: 'SEL2'}
    ];
    const W2data = [
        {id: 1, name: 'Ankit', DoB: '1/1/2024'},
        {id: 2, name: 'MNO', DoB: '2/2/2024'},
        {id: 2, name: 'xyz', DoB: '2/2/2024'},
        {id: 2, name: 'Abc', DoB: '2/2/2024'},
    ];

    const Refdata = [
        {id: 1, name: 'Test', Profile: '.net'},
        {id: 2, name: 'MNO', Profile: 'C#'},
        {id: 2, name: 'xyz', Profile: 'SQL'},
        {id: 2, name: 'Abc', Profile: '2/2/2024'},
    ];

    return(
        <div className="main-screen ">
            <div className="row">
            <ProfileCard></ProfileCard>
            <Calendar></Calendar>
            <Widget data = {W1data} Name = 'Employee Details' ></Widget>
            <Widget data = {W2data} Name = 'Birthdays' ></Widget>
            <Widget data = {Refdata} Name = 'Referral' ></Widget>
            </div>
        </div>
    );
}

export default MainScreen;