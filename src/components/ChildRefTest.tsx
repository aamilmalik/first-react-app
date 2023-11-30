import React from "react";

interface ChildRefTestProps {
    
}
 
interface ChildRefTestState {
    course:string;
    
}
 
class ChildRefTest extends React.Component<ChildRefTestProps, ChildRefTestState> {
    constructor(props: ChildRefTestProps) {
        super(props);
        this.state = { 
            course:"javascript"
          };
    }
    updateCourseName = () =>{
        this.setState({
            course:"React"
        })
    }
    render() { 
        return ( <>
        {this.state.course}
        </> );
    }
}
 
export default ChildRefTest;