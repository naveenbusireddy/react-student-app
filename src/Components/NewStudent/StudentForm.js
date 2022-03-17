import React from "react";

import "./StudentForm.css";

const StudentForm = () => {

  const saveStudentDetails = () => {

  };
  return (
    <form>
      <h3>Enter New Student Details</h3>
      <div className="new-student__controls" style={{ width: "80%" }}>
        <div className="new-student__control">
          <label>Student Name:</label>
          <input
            placeholder="Enter Student Name"
            type="text"
          />
        </div>
        <div className="new-student__control">
          <label>University Name:</label>
          <input 
          placeholder="Enter University Name" 
          type="text"
          />
        </div>
        <div className="new-student__control">
          <label>Email Id:</label>
          <input 
          placeholder="Enter Email Id" 
          type="email" 
          />
        </div>
        <div className="new-student__control">
          <label>Phone No:</label>
          <input 
          placeholder="Enter Contact No" 
          type="number" 
          />
        </div>
        <div className="new-student__control">
          <label>Address:</label>
          <input 
          placeholder="Enter Address" 
          type="text" 
          />
        </div>
        <div>
          <button type="submit" onClick={saveStudentDetails}>
            Save
          </button>
          <button type="reset">Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default StudentForm;
