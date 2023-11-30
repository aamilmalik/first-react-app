import React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface StudentsProps {
    
}
 
interface StudentsState {
   name:string,
   class:string,
   state:string,
   city:string
}
 
class Students extends React.Component<StudentsProps, StudentsState> {
   
  
    constructor(props: StudentsProps) {
        
        super(props);
        this.state = { 
            name:'',
            class:'',
            state:'',
            city:''
         };
    }
    render() { 
       
        return ( <>
        <h1 id="ok"></h1>
        <Container>
            
            <Row>
                <Col>
                <h1 className="mt-2 mx-5"> ABC School</h1>
         <h2 className="mx-3 text-success">ADMISSION FORM</h2>

                     Full Name : <input type="text" placeholder="enter full name" value={this.state.name}
                     onChange={(evt)=>{
                        this.setState({
                            name:evt.target.value
                        })
                     }}
                     />
                    <Col>
                    class : <input type="text" placeholder="ex:1,2,3..." className="mx-4 mt-2" value={this.state.class}
                    onChange={(evt)=>{
                        this.setState({
                            class:evt.target.value
                        })
                    }}
                    /></Col>
       <Col>
        state : <select className="mx-4 mt-2" value={this.state.state} 
        onChange={(evt)=>{
            this.setState({
                state:evt.target.value
            })
        }}
        >
           <option value=''>---select---</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Bihar">Bihar</option>
            <option value="West Bengal">West Bengal</option>
        </select>
       </Col>

       <Col>
        city : <select className="mx-4 mt-2" value={this.state.city}
        onChange={(evt)=>{
            this.setState({
                city:evt.target.value
            })
        }}
        >
        <option value=''>---select---</option>
            <option value="mumbai">mumbai</option>
            <option value="patna">patna</option>
            <option value="kolkata">kolkata</option>
        </select>
       </Col>
       <Col>
         <input type="button" value="confirm admission" className="mx-4 mt-2" 
          onClick={()=>{

          }}
         />
       </Col>

                </Col>
            </Row>
        </Container>
        </> );
    }
}
 
export default Students;