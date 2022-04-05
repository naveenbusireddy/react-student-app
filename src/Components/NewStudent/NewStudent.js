import React from "react";
import StudentForm from "./StudentForm";

const NewStudent = (props) => {

    const saveStudentDataHandler = (enteredStudentData) => {
        const newStudentData = {
            ...enteredStudentData,
            id: Math.random().toString()
        };
        props.addStudent(newStudentData);
        console.log(newStudentData);
    };

    return (
        <div>
            {/* getting the child data to parent through function. */}
            <StudentForm onSaveStudentData = {saveStudentDataHandler}/> 
        </div>
    );
};

export default NewStudent;