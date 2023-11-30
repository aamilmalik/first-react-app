import React from "react";
import ChildRefTest from "./ChildRefTest";

interface EnterNameProps {
    
}
 
interface EnterNameState {
    firstName:string;
    
}
 
class EnterName extends React.Component<EnterNameProps, EnterNameState> {
    ChildCompRef = React.createRef<ChildRefTest>(); 
    constructor(props: EnterNameProps) {
        super(props);
        this.state = { 
            firstName:"",
            
          };
    }
    updateName =(event:any) =>{
        this.setState({
          firstName :event.target.value
        
        })
    }
    printCourse = () =>{
        let courseName = this.ChildCompRef.current?.state.course;
        console.log(courseName)
        this.ChildCompRef.current?.updateCourseName()
    }
    componentDidMount(): void {
     this.setState({
      
     })
    }

    

    render() { 
        return ( 
            <>
            <input type="text"  value={this.state.firstName} onChange={(event)=>{this.updateName(event)}}/>
<br />
<h1>{this.state.firstName}</h1>


<ChildRefTest
 ref={this.ChildCompRef}
></ChildRefTest>
<input type="button" value={"Print Course"} onClick={this.printCourse} />


            </>
         );
    }

}
 
export default EnterName;