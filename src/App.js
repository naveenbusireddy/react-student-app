import React, { useState } from "react";
import "./App.css";

import NewStudent from "./Components/NewStudent/NewStudent"; //importing child component to parent.
import StudentsList from "./Components/StudentsList"; //importing child component to parent.

const studentDummyData = [
  {
    id: "s1",
    studentName: "Student-1",
    university: "ABC University",
    emailId: "student-1@hotmail.com",
    phoneNo: 9876543210,
    address: "Bangalore-68",
  },
  {
    id: "s2",
    studentName: "Student-2",
    university: "DEF University",
    emailId: "student-1@hotmail.com",
    phoneNo: 8765432109,
    address: "Bangalore-88",
  },
  // {
  //   id: "s3",
  //   studentName: "Student-3",
  //   university: "GHI University",
  //   emailId: "student-3@hotmail.com",
  //   phoneNo: 7654321098,
  //   address: "Bangalore-78",
  // },
  // {
  //   id: "s4",
  //   studentName: "Student-4",
  //   university: "XYZ University",
  //   emailId: "student-4@hotmail.com",
  //   phoneNo: 9865327410,
  //   address: "Bangalore-01",
  // },
];
const App = () => {
  const [studentDetails, setStudentDetails] = useState(studentDummyData);
  const addStudentHandler = (event) => {
    setStudentDetails((prevStudents) => {
      return [event, ...prevStudents];
    });
    console.log(event);
  };

  return (
    <div className="App">
      <h2>Student App using React</h2>
      <NewStudent addStudent={addStudentHandler} />
      <br />
      <StudentsList studentObj={studentDetails} />
      {/*assigning the static data to attribute and sending the data through props to child(students) from parent.*/}
    </div>
  );
};

export default App;
