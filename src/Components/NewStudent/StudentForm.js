import React, { useState } from "react";

import "./StudentForm.css";

const StudentForm = () => {
  const [studentName, setStudentName] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");

  const StudentNameChangeHandler = (event) => {
    setStudentName(event.target.value);
  };
  const universityChangeHandler = (event) => {
    setUniversityName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmailId(event.target.value);
  };
  const phoneNoChangeHandler = (event) => {
    setPhoneNo(event.target.value);
  };
  const addressChangeHandler = (event) => {
    setAddress(event.target.value);
  };

  const saveStudentDetails = () => {};
  return (
    <form>
      <h3>Enter New Student Details</h3>
      <div className="new-student__controls" style={{ width: "80%" }}>
        <div className="new-student__control">
          <label>Student Name:</label>
          <input
            placeholder="Enter Student Name"
            type="text"
            onChange={StudentNameChangeHandler}
          />
        </div>
        <div className="new-student__control">
          <label>University Name:</label>
          <input
            placeholder="Enter University Name"
            type="text"
            onChange={universityChangeHandler}
          />
        </div>
        <div className="new-student__control">
          <label>Email Id:</label>
          <input
            placeholder="Enter Email Id"
            type="email"
            onChange={emailChangeHandler}
          />
        </div>
        <div className="new-student__control">
          <label>Phone No:</label>
          <input
            placeholder="Enter Contact No"
            type="number"
            onChange={phoneNoChangeHandler}
          />
        </div>
        <div className="new-student__control">
          <label>Address:</label>
          <input
            placeholder="Enter Address"
            type="text"
            onChange={addressChangeHandler}
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
