// import React from "react";
import React, {useState} from "react";
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

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

  const { register, submitHandler, formState:{errors}} = useForm();

  const onSubmit = (event) => {
    event.preventDefault();
    const studentData = {
      studentName: enteredStudentName,
      university: enteredUniversityName,
      emailId: enteredEmailId,
      phoneNo: enteredPhoneNo,
      address: enteredAddress,
    }; 
    console.log(studentData);
    props.onSaveStudentData(studentData);
    setEnteredStudentName('');
    setEnteredUniversityName("");
    setEnteredEmailId("");
    setEnteredPhoneNo("");
    setEnteredAddress("");
  };
  const cancelHandler = () => {
    setEnteredStudentName("");
    setEnteredUniversityName("");
    setEnteredEmailId("");
    setEnteredPhoneNo("");
    setEnteredAddress("");
  }

  return (
    <form onSubmit={submitHandler(onSubmit)}>
      <h3>Enter New Student Details</h3>
      <div className="new-student__controls" style={{ width: "80%" }}>
        <Form.Field className="new-student__control">
          <label>Student Name:</label>
          <input
            placeholder="Enter Student Name"
            type="text"
            value={enteredStudentName}
            onChange={StudentNameChangeHandler}
            {...register("studentName", {required: true, maxLength: 35})}
          />
        </Form.Field>
        {errors.studentName && <p>Please Check The Student Name</p>}
        <Form.Field className="new-student__control">
          <label>University Name:</label>
          <input
            placeholder="Enter University Name"
            type="text"
            value={enteredUniversityName}
            onChange={universityChangeHandler}
            {...register("universityName", {required: true, maxLength: 40})}
          />
        </Form.Field>
        {errors.university && <p>Please Check The University Name</p>}
        <Form.Field className="new-student__control">
          <label>Email Id:</label>
          <input
            placeholder="Enter Email Id"
            type="email"
            value={enteredEmailId}
            onChange={emailChangeHandler}
            {...register("emailId", 
              { required: true, 
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })}
          />
        </Form.Field>
        {errors.emailId && <p>Please Check The Email Id pattern</p>}
        <Form.Field className="new-student__control">
          <label>Phone No:</label>
          <input
            placeholder="Enter Contact No"
            type="number"
            value={enteredPhoneNo}
            onChange={phoneNoChangeHandler}
            {...register("phoneNo", {required: true, maxLength: 10})}
          />
        </Form.Field>
        {errors.phoneNo && <p>Please Enter Phone Number (without code)</p>}
        <Form.Field className="new-student__control">
          <label>Address:</label>
          <input
            placeholder="Enter Address"
            type="text"
            value={enteredAddress}
            onChange={addressChangeHandler}
            {...register("address", {required: true, maxLength: 120})}
          />
        </Form.Field>
        {errors.address && <p>Please Check The University Name</p>}
      </div>
      <div className="new-student__control">
        <button type="submit">Add Student</button>
        <button type="button" onClick={cancelHandler}>Cancel</button>
      </div>
    </form>
  );
};

export default StudentForm;
