import React from "react";

interface HomeProps {
    
}
 
interface HomeState {
    
}
 
class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
       // this.state = { :  };
    }
    render() { 
        return ( 
            <>
                    <h1>
                        home page
                    </h1>
            </>
         );
    }
}
 
export default Home;