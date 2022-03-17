import React from "react";
import StudentForm from "./StudentForm";

const NewStudent = (props) => {

    const saveStudentDataHandler = (enteredStudentData) => {
        const studentData = {
            ...enteredStudentData,
            id: Math.random().toString()
        };
        props.onAddStudent(studentData);
    };

    return (
        <div>
            <StudentForm onSaveStudentData = {saveStudentDataHandler}/>
        </div>
    )
}

export default NewStudent;