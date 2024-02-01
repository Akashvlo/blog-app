import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, Container, Form, FormGroup, Input, Label, Row ,Col, FormFeedback} from "reactstrap";
import Base from "../components/Base";
import { signUp } from "../services/user_service";
import { toast, Toast } from "react-toastify";
const Signup = () =>{


       

        
     const [data,setData]=useState({
        
        name:'',
        email:'',
        password:'',
        about:'',
        error:'',

     })

     const[error,setError]=useState({
   
         errors:{},
         isError:false

     })
      //handle change
      useEffect(()=>{
         console.log(data);

      },[data])

      const handleChange=(event,property)=>{

            //dynmic set value
         setData({...data,[property]:event.target.value},()=>{

            console.log(data);

         })
      }

      const resetData=()=>{
         setData({
            name:'',
            email:'',
            password:'',
            about:'',
            error:'',
    


         })
      }

      //submit the form

      const submitForm=(event)=>{
         event.preventDefault()


         //if(Util.isError){
            //toast.error("form data is invalid!!")
            //setError({...error,Util:false})
          //  return;
        // }
         console.log(data);

         //data validate\
         //call server api for sending data
         signUp(data).then((resp)=>{
            console.log(resp)
            console.log("sucess log")
            toast.success("user is registed succesfully!! user id"+resp.id)
            setData({
               name:'',
            email:'',
            password:'',
            about:'',
            error:'',
            })
         }).catch((error)=>{
            console.log(error)
            console.log("errror log")
            //handle errors is proper way
            setError({
               errors:error,
               isError:true
            })
         })
      }

        // console.log("name changed");
         //console.log(event.target.value)
      


    return(
 
     <Base>
        <Container>
          <Row className="mt-4">
            <Col sm={{ size: 6 , offset : 3 }} >
              <Card>
        
        <CardHeader>
        
        <h3>fill information to register!!</h3>        
        </CardHeader>

        <CardBody>
                                         {/* Name field*/}

        <Form onSubmit={submitForm}>
           <FormGroup>
             <Label for="name">Enter your Name</Label>
             <Input   
               type="text"
               placeholder="Enter here"
               id="name"
               onChange={(e)=>handleChange(e,'name')}
               value={data.name}
               invalid={ error.errors?.resp?.data?.name ? true : false }
           
           />
          <FormFeedback>
             {error.errors?.resp?.data?.name}
           </FormFeedback>
       </FormGroup>



           {/*email field*/}

           <FormGroup>
           <Label for="email">Enter your Email</Label>
           <Input  
           type="email"
           placeholder="Enter here"
           id="email"  
           onChange={(e)=>handleChange(e,'email')} 
           value={data.email}
           invalid={ error.errors?.resp?.data?.email ? true : false }            
           
           />

           <FormFeedback>
           {error.errors?.resp?.data?.email}
        </FormFeedback>

           
           </FormGroup>
           {/*password field*/}
           <FormGroup>
           <Label for="password">Enter your password</Label>
           <Input  
           type="password"
           placeholder="Enter here"
           id="password"
           onChange={(e)=>handleChange(e,'password')}
           value={data.password}
           invalid={ error.errors?.resp?.data?.password? true : false }
           />

           <FormFeedback>
           {error.errors?.resp?.data?.password}
        </FormFeedback>
           </FormGroup>

           {/*about field*/}


            
            <FormGroup>
            <Label for="about">About</Label>
            <Input  
            type="textarea"
            placeholder="Enter here"
            id="about"
            style={{height:"250px"}}
            onChange={(e)=>handleChange(e,'about')}
            value={data.about}
            invalid={ error.errors?.resp?.data?.about? true : false }
            
            
            />
            <FormFeedback>
            {error.errors?.resp?.data?.about}
             </FormFeedback>   
            </FormGroup>

            <Container className="text-center">
            
            <Button color="dark">Register</Button>
            <Button  onClick={resetData} color="secondary" type="Reset" className="ms-2">Reset</Button>
            
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
 export default Signup