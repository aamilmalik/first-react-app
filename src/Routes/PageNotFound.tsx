import React from "react";

interface PageNotFoundProps {
    
}
 
interface PageNotFoundState {
    
}
 
class PageNotFound extends React.Component<PageNotFoundProps, PageNotFoundState> {
    constructor(props: PageNotFoundProps) {
        super(props);
       // this.state = { :  };
    }
    render() { 
        return ( 
            <>
               <h1>
                error 404 page not found
               </h1>
            </>
         );
    }
}
 
export default PageNotFound;