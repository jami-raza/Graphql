import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';

const GetStudents = gql`
  query AllStudents {
    Students {
      name
      age
      email

    }
  }
`;
const ADD_STUDENT = gql`
  mutation AddStudent($id: Int!, $email: String!, $age: Int!, $name: String!) {
    addStudent(
        input: {id: $id, name: $name, email: $email, age: $age}
    ) {
      id
      name
      age
      email
    }
  }
`;
    
function StudentsList(){
    const {loading,error,data} = useQuery(GetStudents);
    const [addStd] = useMutation(ADD_STUDENT);

    if (loading)
    return<p>Loading</p>
    if (error)
    return<p>Error</p>
    //console.log(data)
    const {Students} = data;
    return(
        <div>
            <h1>Students List</h1>
            <table border="2">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {Students.map((std,ind)=>{
                    return(
                        <tr key={ind}>
                            <td>{std.name}</td>
                            <td>{std.age}</td>
                            <td>{std.email}</td>
                        </tr>
                    )
                })
            }
            </tbody>
            </table>
            <button onClick={()=>
            addStd({
                variables: {
                    id: 15, email: "temp2@gmail", age: 23, name: "Student 1"},
                    refetchQueries: [{ query: GetStudents }]
            })}>Add Student</button>
        </div>
    )
}
export default StudentsList;