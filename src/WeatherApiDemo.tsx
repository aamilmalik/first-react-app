import React from "react";

interface WeatherApiDemoProps {
    
}
 
interface WeatherApiDemoState {
    city:string,
    temperature:string
}
 
class WeatherApiDemo extends React.Component<WeatherApiDemoProps, WeatherApiDemoState> {
    constructor(props: WeatherApiDemoProps) {
        super(props);
        this.state = { 
           city : "",
           temperature : ""
        
        };
    }

   componentDidMount(): void {
       this.getWeather();
       this.test()
       this.testAsync()
       .then(response=>{console.log(response)})
       .catch(err=>console.log(err))
   }

  test = () =>{
 // synchronus
  }

  testAsync = async () =>{
    // asynchronus
  }

   getWeather = async () =>{

    var requestOptions = {
        method: 'GET',
       
      };
      
      const response = await fetch("http://api.weatherapi.com/v1/current.json?key=a7735685c4b74fb0b2e72903231211&q=nagPUr", requestOptions)
      const result = await response.json();
      console.log(result)
        this.setState({
            city:result.location.name,
            temperature:result.current.temp_c
        })
        
        
        console.log(1)

   }

    

    render() { 
        return ( 
            <>
                <h1>Weather API Test</h1>
                <h2>
                    {this.state.city} : {this.state.temperature}
                </h2>

             
            </>
         );
    }
}
 
export default WeatherApiDemo;