import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

interface EmployeeProps {
    
}
 
interface EmployeeState {
    employees:any[]
}
 
class Employee extends React.Component<EmployeeProps, EmployeeState> {
    constructor(props: EmployeeProps) {
        super(props);
        this.state = { 
            employees : []
         };
    }

    componentDidMount(): void {
        var requestOptions = {
            method: 'GET',
            
          };    
          
          fetch("https://gorest.co.in/public/v2/users", requestOptions)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    employees:result
                })
            })

            .catch(error => console.log('error', error));
    }


    render() { 
        return ( 
            <>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>id </th>
                <th>Name</th>
               
                
                </tr>
      </thead>
      <tbody>
      {
                this.state.employees.map(employee =>{
                    return (
                        <tr>
                            <td>
                             <Link to={`/employeeDetails/${employee.id}`}>  {employee.id} </Link>
                            </td>
                            <td>
                               {employee.name}
                            </td>
                            
                        </tr>
                    )
                })
              }
      </tbody>
            </Table>
              
            </>
         );
    }
}
 
export default Employee;