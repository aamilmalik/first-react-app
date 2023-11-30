import React, { useEffect } from "react";
import { Container , Col, Row } from "react-bootstrap";
import './FormValidationFunComp.css'

function FormValidationFunComp()
{

      const [fname,setFname] = React.useState('');
      const [lname,setLname] = React.useState('');
      const [state,setState] = React.useState('');
      const [city,setCity] = React.useState('');
      const [isFormValid,setIsFormValid] = React.useState(true);
   
      useEffect(()=>{
       
      },[])


    return(
        <>
        <Container>
            <Row>
                <Col>
                 First Name : <input type="text" value={fname}
                 onChange={(event)=>{
                    setFname(
                        event.target.value
                    )
                 }}
                 />
                 {
                    !isFormValid === false && fname === '' &&  <label className="funError">*</label>
                 }
                
                </Col>

                <Col>
                 Last Name : <input type="text" value={lname} onChange={(event)=>{
                    setLname(
                        event.target.value
                    )
                 }}/>
                 {
                    !isFormValid === false && lname === '' && <label className="funError">*</label>
                 }
                </Col>
                
                <Col>
                state : 
                 <select value={state} onChange={(event)=>{
                    setState(event.target.value)
                 }}>
                    <option value="">---select---</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Rajasthan">Rajasthan</option>
                 </select>
                 {
                    !isFormValid === false && state === '' && <label className="funError">*</label>
                 }
                 
                </Col>

                <Col>
                city : 
                 <select value={city} onChange={(event)=>{
                    setCity(event.target.value)
                 }}>
                    <option value="">---select---</option>
                    <option value="patna">patna</option>
                    <option value="mumbai">mumbai</option>
                    <option value="jaipur">jaipur</option>
                 </select>
                 {
                    !isFormValid === false && city === '' &&  <label className="funError">*</label>
                 }
                
                </Col>
                <Col></Col>


          </Row>
          <Row>
            <Col>
             <input type="button" value="submit" onClick={()=>{
               if(fname === '' ||
                  lname === '' ||
                  state === '' ||
                  city === ''
               ){
                      alert("* denoted required fields please fill all required fields")
               }else{
                  alert("form submitted successfully...")
               }
             }}/>
            </Col>
          </Row>
          </Container>
        </>
    )
}
export default FormValidationFunComp;