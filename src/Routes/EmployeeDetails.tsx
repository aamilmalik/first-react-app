import React, { useState } from "react";
import { FunctionComponent, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

interface EmployeeDetailsProps {
    
}
 
const EmployeeDetails: FunctionComponent<EmployeeDetailsProps> = () => {

    const [empDetils,setEmpDetils] = useState({id:'',name:'',email:'',gender:'',status:''});
    const param = useParams();

    React.useEffect(()=>{
       
        var requestOptions = {
            method: 'GET',
            
          };
          
          fetch(`https://gorest.co.in/public/v2/users/${param.id}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setEmpDetils(result);
             
            })

            .catch(error => console.log('error', error));
    },[])

    return ( 
        <>
        <Link to ={"/employee"}>back</Link>
        {
            empDetils !== undefined && <> 
                <h1>id:{empDetils.id}</h1><br></br>
                <h1>name: {empDetils.name}</h1><br></br>
                <h1>email: {empDetils.email}</h1><br></br>
                <h1>gender: {empDetils.gender}</h1><br></br>
                <h1>ststus: {empDetils.status}</h1>
         </>
        }
         
        </>
     );
}
 
export default EmployeeDetails;