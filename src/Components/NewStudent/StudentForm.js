import React, { useState } from "react";

import "./StudentForm.css";

const StudentForm = (props) => {
  const [enteredStudentName, setEnteredStudentName] = useState("");
  const [enteredUniversityName, setEnteredUniversityName] = useState("");
  const [enteredEmailId, setEnteredEmailId] = useState("");
  const [enteredPhoneNo, setEnteredPhoneNo] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");

  const StudentNameChangeHandler = (event) => {
    setEnteredStudentName(event.target.value);
  };
  const universityChangeHandler = (event) => {
    setEnteredUniversityName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmailId(event.target.value);
  };
  const phoneNoChangeHandler = (event) => {
    setEnteredPhoneNo(event.target.value);
  };
  const addressChangeHandler = (event) => {
    setEnteredAddress(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const studentData = {
      StudentName: enteredStudentName,
      University: enteredUniversityName,
      EmailId: enteredEmailId,
      PhoneNo: enteredPhoneNo,
      Address: enteredAddress,
    };
    // console.log(studentData);
    props.onSaveStudentData(studentData);
    setEnteredStudentName("");
    setEnteredUniversityName("");
    setEnteredEmailId("");
    setEnteredPhoneNo("");
    setEnteredAddress("");
  };

  return (
    <form onSubmit={submitHandler}>
      <h3>Enter New Student Details</h3>
      <div className="new-student__controls" style={{ width: "80%" }}>
        <div className="new-student__control">
          <label>Student Name:</label>
          <input
            placeholder="Enter Student Name"
            type="text"
            value={enteredStudentName}
            onChange={StudentNameChangeHandler}
          />
        </div>
        <div className="new-student__control">
          <label>University Name:</label>
          <input
            placeholder="Enter University Name"
            type="text"
            value={enteredUniversityName}
            onChange={universityChangeHandler}
          />
        </div>
        <div className="new-student__control">
          <label>Email Id:</label>
          <input
            placeholder="Enter Email Id"
            type="email"
            value={enteredEmailId}
            onChange={emailChangeHandler}
          />
        </div>
        <div className="new-student__control">
          <label>Phone No:</label>
          <input
            placeholder="Enter Contact No"
            type="number"
            value={enteredPhoneNo}
            onChange={phoneNoChangeHandler}
          />
        </div>
        <div className="new-student__control">
          <label>Address:</label>
          <input
            placeholder="Enter Address"
            type="text"
            value={enteredAddress}
            onChange={addressChangeHandler}
          />
        </div>
        <div>
          <button type="submit">Add Student</button>
          <button type="reset">Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default StudentForm;
