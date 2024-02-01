import Base from "../components/Base"
//import {UNSAFE_RouteContext} from "react-router-dom"
import userContext from "../context/userContext";
const Services = () =>{
    
    return(
    
        <userContext.Consumer>
        {
            (user)=>(
                
        <Base>
          
        <h1>this is services</h1>
        <h1>welcome user:{user.name}</h1>
  
        </Base>
            )
        }
        
        
        </userContext.Consumer>




    );

};
   export default Services