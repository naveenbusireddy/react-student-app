import React, { useState } from "react";

import './StudentElements.css'

const StudentElements = (props) => {

    const [studentName, setStudentName] = useState(props.StudentName);
    const [universityName, setUniversityName] = useState(props.University);
    const [emailId, setEmailId] = useState(props.EmailId);
    const [phoneNo, setPhoneNo] = useState(props.PhoneNo);
    const [address, setAddress] = useState(props.Address);
    // console.log("updated");

    const clickHandler = () => {
        setStudentName('StudentUpdated');
        setUniversityName('university');
        setEmailId('stude@gmail.com');
        setPhoneNo('98563214');
        setAddress('Bangalore-68');   
    }
    
    return (
        <div>
            <div className="student-item" style={{width:'85%'}}>
            <h4>{props.StudentName}</h4>
            <h4>{props.University}</h4>
            <h4>{props.EmailId}</h4>
            <h4>{props.PhoneNo}</h4>
            <h4>{props.Address}</h4>
        </div>
        <button onClick={clickHandler}>Check</button>
        </div>
        
    )
    
}

export default StudentElements;