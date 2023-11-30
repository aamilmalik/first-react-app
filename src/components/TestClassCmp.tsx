import React from "react";
import ITestClassCompState from "../interfaces/ITestClassCompState";
import TestChildCompState from "./TestChildCompState";

export default class TestClassCmp extends React.Component<any, ITestClassCompState> {
    public num: number = 0;
    private str: string = 'strings...';
    public bool: boolean = true;
    public address: any = "";

    public obj1: any = {
        name: "aamil malik",
        age: 22,
    };
    public childCompValue: string = "test child comp...";

    public arr: Array<any> = [4, 1, 3, 'ok', 'ck'];

    testChildCompRef = React.createRef<TestChildCompState>();

    constructor(props: any) {
        super(props);
        this.address = "hyderabad";
        console.log("in constructor....");

        this.state = {
            firstName: 'aamil',
            lastName: 'malik',
            pincode: 443320,
        };
    }

    showMessege = () => {
        alert(this.address);
    }

    updateName = () => {
        this.setState({
            firstName: "mohammad",
            lastName: "taiber"
        });
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log(prevState);
        console.log('in did update');
    }
 
    updateChildCompState = () => {
        this.testChildCompRef.current?.updateChildCompName();
        console.log(this.testChildCompRef.current?.state.name);
        
    }
 
    render() { 
       console.log(this.testChildCompRef)
        console.log('in render');
        return (
            <>
                <h3>number is {this.num} <br /> boolean value = {this.bool}  <br />string is {this.str}</h3>
                {this.arr.map((item, index) => {
                    return (
                        <p key={index}>{item}</p>
                    );
                })}
                <p>
                    name of obj1 = {this.obj1.name}<br />
                    age of obj1 = {this.obj1.age}<br />
                </p>
                <input type="button" value={"Alert"} onClick={this.showMessege} />
                <h1>
                    {this.state.firstName}:::{this.state.lastName}
                </h1>
                <input type="button" value={"set state"} onClick={this.updateName} />
                <br />
                <input type="button" value="updateChildComp" onClick={this.updateChildCompState} />
                <br /><br />
                <TestChildCompState
                    ref={this.testChildCompRef}
                    childCompValue={this.childCompValue}
                    statee={this.state.pincode}
                    updateName={this.updateName}
                ></TestChildCompState>
            </>
        ); 
    }
}
