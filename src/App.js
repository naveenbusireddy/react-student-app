import './App.css';

import NewStudent from './Components/NewStudent/NewStudent'; //importing child component to parent.
import Students from './Components/Students'; //importing child component to parent.

const App = () => {
  const studentStaticObj = [
    {
      studentName : 'Student-1',
      university : 'ABC University',
      emailId : 'student-1@hotmail.com',
      phoneNo : 9876543210,
      address : 'Bangalore-68'
    },
    {
      studentName : 'Student-2',
      university : 'DEF University',
      emailId : 'student-1@hotmail.com',
      phoneNo : 8765432109,
      address : 'Bangalore-88'
    },
    {
      studentName : 'Student-3',
      university : 'GHI University',
      emailId : 'student-3@hotmail.com',
      phoneNo : 7654321098,
      address : 'Bangalore-78'
    },
    {
      studentName : 'Student-4',
      university : 'XYZ University',
      emailId : 'student-4@hotmail.com',
      phoneNo : 9865327410,
      address : 'Bangalore-01'
    }

  ]
  return (
    <div className="App">
      <header className="App-header">
        <h2>Student App using React</h2>
        <NewStudent />
        <br/>
        <Students studentObj={studentStaticObj} /> {/*assigning the static data to attribute and sending the data through props to child(students) from parent.*/}
      </header>
    </div>
  );
}

export default App;
