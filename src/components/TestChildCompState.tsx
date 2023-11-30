import React from "react";


interface ITestChildProps {
  childCompValue:string;
  statee:number;
   updateName:any;
}
 

interface ITestClassCompState{
 name : string;
  

}
 
export default class TestChildCompState  extends React.Component<ITestChildProps, ITestClassCompState> {
  constructor(props: any) {
    super(props);
   
     this.state = { 
      name : "i am child component"
       };
  }
  public mobile:string = "redmi";
  updateChildCompName = () =>{
    this.setState({
      name : "updated by parent component"
    })
  }
  render() { 
    return ( 
     <div style={{border:"2px solid red",backgroundColor:"gray"}}>
      <h1>
        child comp
      </h1>
      <h2>

        {this.props.childCompValue}</h2>
     
       <h3>  {this.props.statee}</h3>
      
       <input type="button" value="update child comp state" onClick={this.props.updateName} />
       <h2>
        {this.state.name}
       </h2>
     </div>
     );
  }
}
 
