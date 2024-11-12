import Marks from "./components/Marks"
import { data } from './data'


function App() {


  return (
    <>
      <div className="bg-[aqua] text-red-500 border-[1px] border-solid border-black" >
        <h1 className="bg-green-500 text-black">Student Details</h1>
        {
          data.map(student => (
            <div key={student.id}>
              <h2>Name: {student.name}</h2>
              <h2>Email: {student.email}</h2>
              <h2>Mobile No: {student.mob}</h2>
              <Marks m1={student.marks[0]} m2={student.marks[1]} m3={student.marks[2]} />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
