import React, { useState } from "react";

import './StudentElements.css'

const StudentElements = (props) => {

    return (
        <div>
            <div className="student-item" style={{width:'85%'}}>
            <h4>{props.StudentName}</h4>
            <h4>{props.University}</h4>
            <h4>{props.EmailId}</h4>
            <h4>{props.PhoneNo}</h4>
            <h4>{props.Address}</h4>
        </div>
        
        </div>        
    )    
}

export default StudentElements;