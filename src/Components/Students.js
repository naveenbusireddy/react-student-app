import React from "react";

import StudentElements from "./StudentElements"; //importing child component to parent.

const Students = (gettingObj) => { //getting the data from parent through props(gettingObj).
    
  return (
    <div>
    <div>
      <StudentElements
        StudentName={gettingObj.studentObj[0].studentName} //
        University={gettingObj.studentObj[0].university}
        EmailId={gettingObj.studentObj[0].emailId}
        PhoneNo={gettingObj.studentObj[0].phoneNo}
        Address={gettingObj.studentObj[0].address}
      />
      <StudentElements
        StudentName={gettingObj.studentObj[1].studentName}
        University={gettingObj.studentObj[1].university}
        EmailId={gettingObj.studentObj[1].emailId}
        PhoneNo={gettingObj.studentObj[1].phoneNo}
        Address={gettingObj.studentObj[1].address}
      />
      <StudentElements
        StudentName={gettingObj.studentObj[2].studentName}
        University={gettingObj.studentObj[2].university}
        EmailId={gettingObj.studentObj[2].emailId}
        PhoneNo={gettingObj.studentObj[2].phoneNo}
        Address={gettingObj.studentObj[2].address}
      />
      <StudentElements
        StudentName={gettingObj.studentObj[3].studentName}
        University={gettingObj.studentObj[3].university}
        EmailId={gettingObj.studentObj[3].emailId}
        PhoneNo={gettingObj.studentObj[3].phoneNo}
        Address={gettingObj.studentObj[3].address}
      />
    </div>
    </div>
  );
};

export default Students;
