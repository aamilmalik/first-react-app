import React from "react";

function FunctionalCompState()
{
    const [name,setName] = React.useState('manish');
    const [address,setAddress] = React.useState('nagpur');

    // setTimeout(() => {
    //    setName('virat')
    // },5000)

     React.useEffect(()=>{
        alert('address updated')
     },[address])

    return(
        <>

        <h2>
            {name}:::{address}
            
        </h2>

        <input type="button" value="setName" onClick={() => {
            setName('prajwal')
        }
        }/>

        <input type="button" value="update address" onClick={() =>{
         setAddress('dehli')
        }}/>
        </>
    )
}

export default FunctionalCompState;