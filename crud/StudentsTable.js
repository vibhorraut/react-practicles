
import { Route, Routes, useNavigate } from "react-router-dom";
export function StudentsTable({ studentList, onDelete, OnStudentUpdate }) {
    const navigate=useNavigate()
    return <>


        <div className="card card-body">
            <div className="mb-2"> <button className="btn btn-danger" onClick={()=>{
              navigate("/students/form")
            }}> Add Student</button></div>
            <table className="table table-bordered table-hover text-right">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Contact </th>
                        <th> State</th>
                        <th> Pin</th>
                        <th> Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentList.map((student, index) => {
                            return <tr key={student.id}>
                                <td> {student.id}</td>
                                <td> {student.fname}</td>
                                <td> {student.lastname}</td>
                                <td> {student.email}</td>
                                <td> {student.ContactNo}</td>
                                <td> {student.state}</td>
                                <td> <button className="btn btn-secondary mr-2" onClick={() => {
                                    OnStudentUpdate(student)
                                }}> Update </button>
                                    <button className="btn btn-danger dltBtn" onClick={() => onDelete(student.id)}> Delete</button>
                                </td>


                            </tr>
                        })
                    }
                </tbody>

            </table>

        </div>
    </>
}