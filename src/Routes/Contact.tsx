import React from "react";

interface ContactProps {
    
}
 
interface ContactState {
    
}
 
class Contact extends React.Component<ContactProps, ContactState> {
    constructor(props: ContactProps) {
        super(props);
        //this.state = { :  };
    }
    render() { 
        return ( 
           <>
              <h2>
                Contact page
              </h2>
           </>
         );
    }
}
 
export default Contact;