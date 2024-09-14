import React from "react";



function EmployeeTable({data,loading}){
  
    return(
        <div className="wrapper">
        <div className="header" >
            Employee Data Table
        </div>
        <div className="employeeTableDiv" >

            <table>
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                </tr>
                </thead>
                <tbody>{
                    !loading? 
                     data.map((employee) => (
                        <tr>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.role}</td>                        
                        </tr>
                    )) : <>No data</>
                    }                   
                </tbody>
            </table>
        </div>

      </div>);




}
export default EmployeeTable;