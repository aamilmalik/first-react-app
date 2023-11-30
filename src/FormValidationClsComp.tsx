import './FormValidationClsComp.css'; 
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

interface FormValidationClsCompProps {
    
}
 
interface FormValidationClsCompState {
    name:string,
    mobNo:string,
    state:string,
    city:string,
    isFormValid:boolean,
}
 
class FormValidationClsComp extends React.Component<FormValidationClsCompProps, FormValidationClsCompState> {
    constructor(props: FormValidationClsCompProps) {
        super(props);
        this.state = 
        { 
            name:'',
            mobNo:'',
            state:'',
            city:'',
            isFormValid:true, 
        
        
        };
    }


    


    saveForm = () =>{
        if(this.validateForm()){
          alert('saved successfully') 
          this.setState({
            isFormValid:true
           })
        }else{
            this.setState({
                isFormValid:false
               })
        }
       

    }
    validateForm = () =>{
    if(this.state.name==='' ||
    this.state.mobNo==='' ||
    this.state.state==='' ||
    this.state.city===''
    
    ){
        return false
    }
    else{
        return true
    }
    }
 
    render() { 
        return ( 
            <>
            <Container>
                <Card className="mt-5">
                <Row>
                    <Col>
                    <label>Student Name</label>
                    <input type="text" value={this.state.name} 
                    onChange={(event)=>{this.setState({
                        name:event.target.value
                    })}}
                    />
                    {
                        !this.state.isFormValid && this.state.name === ''  ? <label className='clsError'>Please enter name</label>:""
                    }
                   
                    </Col>
                    <Col>
                    <label>Mobile Number</label>
                    <input type="text" value={this.state.mobNo} onChange={(event)=>{
                        this.setState({
                            mobNo:event.target.value
                        })
                    }} />
                    {
                        !this.state.isFormValid && this.state.mobNo==='' && <label className='clsError'>Please enter Mob No</label>
                    }
                    
                    </Col>
                    <Col>
                    <label>State</label>
                    <select value={this.state.state} onChange={(event)=>{
                        this.setState({
                            state:event.target.value
                        })
                    }}>
                        <option>---select---</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="UP">UP</option>
                    </select>
                    {
                    !this.state.isFormValid && this.state.state=='' && <label className='clsError'>Please enter state</label>
                     }
                    </Col>
                    <Col>
                    <label>City</label>
                    <select value={this.state.city} onChange={(event)=>{
                        this.setState({
                            city:event.target.value
                        })
                    }}>
                        <option>---select---</option>
                        <option value="patna">patna</option>
                        <option value="mumbai">mumbai</option>
                        <option value="agra">agra</option>
                    </select>
                    {  !this.state.isFormValid && this.state.city=='' &&  <label className='clsError'>Please enter city</label>
                    }
                   
                    </Col>
                </Row>
                </Card>
                <Row>
                    <Col>
                     <input type="button" value={'submit'} onClick={this.saveForm}/>
                    </Col>
                </Row>
             
            </Container>
            </>
         );
    }
}
 
export default FormValidationClsComp;