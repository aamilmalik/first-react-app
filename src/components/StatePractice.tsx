import * as React from 'react';

interface StatePracticeProps {
    
}
 
interface StatePracticeState {
    mobileName:string;
    brand:string;
}
 
class StatePractice extends React.Component<StatePracticeProps, StatePracticeState> {
    constructor(props: StatePracticeProps) {
        super(props);
        this.state = { 
            mobileName:"Iphone 14 Plus",
            brand:"Apple"
        };
    }

    updateMobileName = () =>{
        this.setState({
            mobileName:"Iphone 15+"
        })
    }

    render() { 
        return ( 
            <>
<h1>{this.state.mobileName}</h1>
<button onClick={this.updateMobileName}></button>

            </>
         );
    }
}
 
export default StatePractice;