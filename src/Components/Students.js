import React from "react";
import StudentElements from "./StudentElements"; //importing child component to parent.

const Students = (gettingObj) => { 
  
  console.log(gettingObj);
  return (
    <div>
    <div>
      {gettingObj.studentObj.map((event) => ( //getting the data from parent through props(studentObj).
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
