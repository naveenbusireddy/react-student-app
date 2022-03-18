import React from "react";
import StudentElements from "./StudentElements"; //importing child component to parent.

const Students = (gettingObj) => { //getting the data from parent through props(gettingObj).

  console.log(gettingObj);
  return (
    <div>
    <div>
      {gettingObj.studentObj.map((event) => (
        <StudentElements
        key={event.id}
        StudentName={event.studentName}
        University={event.university}
        EmailId={event.emailId}
        PhoneNo={event.phoneNo}
        Address={event.address}
        />
      ))}
    </div>
    </div>
  );
};

export default Students;
