import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GetStudents = gql`
  query AllStudents {
    Students {
      name
      age
      email

    }
  }
`;

    
function StudentsList(){
    const {loading,error,data} = useQuery(GetStudents);

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
                {Students.map(std=>{
                    return(
                        <tr key={std.id}>
                            <td>{std.name}</td>
                            <td>{std.age}</td>
                            <td>{std.email}</td>
                        </tr>
                    )
                })
            }
            </tbody>
            </table>
        </div>
    )
}
export default StudentsList;