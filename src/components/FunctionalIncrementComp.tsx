import React from "react";

function FunctionalIncrementComp()
{
    const [num,setNum] = React.useState(0);

    const Increment = () =>{
        setNum(num+1);
    }

    function Decrement(){
        setNum(num-1);
    }

    return(
        <>
        <h2>
            {num}
        </h2>
            <input type="button" value="+" onClick={Increment}/>
            <input type="button" value="-" onClick={Decrement}/>
        </>
    )
}

export default FunctionalIncrementComp;