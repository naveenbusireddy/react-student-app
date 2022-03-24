// import React from "react";
import React, {useState} from "react";

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
      studentName: enteredStudentName,
      university: enteredUniversityName,
      emailId: enteredEmailId,
      phoneNo: enteredPhoneNo,
      address: enteredAddress,
    };
    console.log(studentData);
    props.onSaveStudentData(studentData); //sending child data to parent through function.
    //below 5 lines are used for clearing the form fields data after clicking the submit button
    setEnteredStudentName('');
    setEnteredUniversityName("");
    setEnteredEmailId("");
    setEnteredPhoneNo("");
    setEnteredAddress("");
  };
  const cancelHandler = () => {
    //below 5 lines are used for clearing the form fields data after clicking the cancel button
    setEnteredStudentName("");
    setEnteredUniversityName("");
    setEnteredEmailId("");
    setEnteredPhoneNo("");
    setEnteredAddress("");
  }
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
      </div>
      <div className="new-student__control">
        <button type="submit">Add Student</button>
        <button type="button" onClick={cancelHandler}>Cancel</button>
      </div>
    </form>
  );
};

export default StudentForm;
