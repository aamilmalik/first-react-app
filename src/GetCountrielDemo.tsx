import React from "react";

interface GetCountriesDemoProps {
    
}
 
interface GetCountriesDemoState {
    accessToken:string,
    countries:Array<any>
}
 
class GetCountriesDemo extends React.Component<GetCountriesDemoProps, GetCountriesDemoState> {
    constructor(props: GetCountriesDemoProps) {
        super(props);
        this.state = { 
            accessToken:"",
            countries : []
         };
    }
    componentDidMount(): void {
        this.CountruApi()
    }

   CountruApi = async () =>{
    if(this.state.accessToken === ""){

    
    var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("api-token", "3MXyt-1VdbZJ7ospdejBA7z8WOm_OkTYC6QHGgmTVFpARgU4dlkdMgSySLYMKbf5jGQ");
myHeaders.append("user-email", "dummyemail12233@gmail.com");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,

};

const response = await fetch("https://www.universal-tutorial.com/api/getaccesstoken?Accept=application/json&api-token=3MXyt-1VdbZJ7ospdejBA7z8WOm_OkTYC6QHGgmTVFpARgU4dlkdMgSySLYMKbf5jGQ&user-email=dummyemail12233@gmail.com", requestOptions)
const result = await response.json()
const accessToken = result.auth_token

console.log(accessToken)
this.setState({
    accessToken:accessToken
})
   let countryApiHeader = new Headers();
   countryApiHeader.append("Authorization","Bearer "+accessToken);
   countryApiHeader.append("Accept", "application/json");

   var countryRequestOptions = {
    method: 'GET',
    headers: countryApiHeader,
  
  };

   const countryResponse = await fetch("https://www.universal-tutorial.com/api/countries", requestOptions)
   const countryResult = await countryResponse.json();
   console.log(countryResult)
   this.setState({
    countries:countryResult
   })
   }
}
    render() { 
        return ( 

            <>
             
            </>
         );
    }
}
 
export default GetCountriesDemo;