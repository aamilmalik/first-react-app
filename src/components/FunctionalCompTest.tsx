
function ChildFunComp(props:any){
    const name = 'jjj';
    return(
        <>
        <h2>
            i am child component
        </h2>
        <h2>
              {props.num1}
        </h2>
        </>
    )
}

function FunctionCompTest(){
   
    const name = 'Tom & Jerry';
    const num1 = 10;

return(
    <>
     <h1>My First functional component</h1>
     <h3>{name}</h3>
     <ChildFunComp num1={num1}></ChildFunComp>
    </>
)
   

}

export default FunctionCompTest;