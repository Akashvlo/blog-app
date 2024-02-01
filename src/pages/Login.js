import { useState } from "react";
import { toast } from "react-toastify";
import { Card, CardBody, CardHeader, Container, Form, FormGroup, Input, Label, Row ,Col,Button} from "reactstrap";
//import {handleFormSubmit,handleReset,data} from "react"
import Base from "../components/Base";
import { loginUser } from "../services/user_service";
import { doLogin } from "../auth";
import { useNavigate } from "react-router-dom";
const Login = () =>{

   const navigate=useNavigate()

   const[loginDetail,setLoginDetail]=useState({
      username:'',
      password:''
   })
   const handleChange=(event,field)=>{
      let actualValue=event.target.value
      setLoginDetail({
         ...loginDetail,
         [field]:actualValue
      })
   }

      const handleReset=()=>{
         setLoginDetail({
            username:'',
            password:'',
         })
      }
      const handleFormSubmit=(event)=>{
         event.preventDefault();
         console.log(loginDetail)
         //validation
         if(loginDetail.username.trim()=='' || loginDetail.password.trim()=='')
         {toast.error("username or password is required!!")
         return
      } 
      //submit the data to server to generate token
      loginUser(loginDetail).then((data)=>{
         console.log("user login")
         console.log(data)

         //save the data to local storage
         doLogin(data,()=>{
            console.log("login detail is save to local storge")

            //redirect to user dashboared page

            navigate("/private/dashboard")
               



         })



         toast.success("login sucess")
      }).catch(error=>{
         console.log(error)
         if(error.response.status==400 ||error.response.status==401){
            toast.error(error.response.data.message) 
         }else{
         toast.error("something went worng")
         }
      })

   }
    return(
 
     <Base>


        <Container>
        
           <Row>
           
           <Col sm={{size:6,offset:3}}>
           
             <Card>
              <CardHeader>
              <h3>Login here</h3>
              
              </CardHeader>
              <CardBody>



              <Form onSubmit={handleFormSubmit}>
              {/*email field*/}

                 <FormGroup>
                  <Label for="email">
                  Enter Email
                  
                  </Label>
                  <Input    
                  type="text"
                  id="email"
                  value={loginDetail.username}
                  onChange={(e)=>handleChange(e,'username')}
                  
                  />
                  
                 </FormGroup>


                 {/*password field*/}

                 <FormGroup>
                  <Label for="password">
                  Enter Password
                  
                  </Label>
                  <Input    
                  type="password"
                  id="password"
                  value={loginDetail.password}
                  onChange={(e)=>handleChange(e,'password')}
                  
                  />
                  
                 </FormGroup>



                 <Container className="text-center">
                   <Button  color="dark">Login</Button>
                   <Button onClick={handleReset} className="ms-2" color="secondary">Reset</Button>
                 </Container>




              </Form>
              
              
              
              </CardBody>
             
             
             </Card>
           
           </Col>
            
           </Row>
        
        
        </Container>
     

     

     
     </Base>
    );
 };
 export default Login