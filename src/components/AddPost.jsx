import { useEffect, useRef, useState } from "react"
import { Card, CardBody, Form, Label,Input, Container, Button } from "reactstrap"
import {loadAllCategories} from "../services/category-service"
import  JoditEditor  from "jodit-react"
import { createPost as doCreatePost, uploadPostImage } from "../services/post-service"
import {getCurrentUserDetail} from "../auth/index"
import { toast } from "react-toastify"
//import { useRef } from "react"

const AddPost=()=>{



    const editor=useRef(null)
   // const [content,setContent]=useState('')
     
    const[user,setUser]=useState(undefined)


    const[categories,setCategories]=useState([])

    const [post,setPost]=useState({

        title:'',
        content:'',
        categoryId:''
    })

    const [image,setImage]=useState(null)



    const config={
        placeholder:"Start typing....."
    }

    useEffect(
        ()=>{
          setUser(getCurrentUserDetail())
            loadAllCategories().then((data) => {
                console.log(data)
                setCategories(data)
            }).catch(error=>{
                console.log(error)
            });

        },
        []
    )

      //field change function

      const fieldChanged=(event)=>{
         // console.log(event)   
        setPost({...post,[event.target.name]:event.target.value})

      }

      const contentfieldChange=(data)=>{
        setPost({...post,'content':data})
      }

      //create post function
      const createPost=(event)=>{


        event.preventDefault();
        //console.log(post)

        if(post.title.trim()===''){
        alert("post title is required!!")
        return



      }
      if(post.content.trim()===''){
          
        alert("post content is required!!")
        return

      }

      if(post.categoryId===''){
        alert("post categoryId is required!!")
        return
      }

      //submit the form on server

            post['userId']=user.id
            doCreatePost(post).then(data=>{

              uploadPostImage(image,data.postId).then(data=>{
                toast.success("image uploaded!!")
              }).catch(error=>{
                toast.error("Error in uploading image")
                console.log(error)
              })

              toast.success("post created!!")
                console.log(post)
            }).catch((error)=>{
                alert("error")
               // console.log(error)
            })


    }
 
    //handlefile changed event
    const handleFileChange=(event)=>{
      console.log(event.target.files[0])
      setImage(event.target.files[0])
    }



    return(
        <div className="wrapper">
        <Card className="shadow border-0">
          <CardBody>
          {/*JSON.stringify(post)*/}

          <h3>Whats going in your mind?</h3>

          <Form onSubmit={createPost}>
              <div className="my-3">
                   <Label  for="title">
                   Post title
                   </Label>
                    <Input 
                    type="text" 
                    id="title"
                    placeholder="enter here"
                    name="title"
                    onChange={fieldChanged}
                    
                     />         
               
              </div>


              <div className="my-3">
              <Label  for="content">
              Post Content
              </Label>
               <JoditEditor  
              
                 ref={editor}
                 value={post.content}
                 
                // config={config}
                 onChange={contentfieldChange}
    
    
                    />
                    {/* file field */}
                    <div className="mt-3">
                    <Label for="image">Select Post banner</Label>
                    <Input id="image" type="file" onChange={handleFileChange}/>

                    </div>
                    
                    
                    
                    
               </div>
               <div className="my-3">
              <Label  for="category">
              Post Category
              </Label>
               <Input 
               type="select" 
               id="category"
               placeholder="enter here"
               name="categoryId"
               onChange={fieldChanged}
               defaultValue={0}
               
               >
               <option disabled value={0}>--select category--</option>
              {
                categories.map((category)=>(
                    <option value={category.categoryId} key={category.categoryId}>
                    {category.categoryTitle}
                    </option>
                ))
              }
             
               </Input>

               </div>







               <Container className="text-center">
               <Button type="submit" color="primary">
               create a post
               </Button>
               <Button color="danger">
               reset content
               </Button>
               </Container>
               
          
          </Form>
          
          
          </CardBody>
        
        </Card>

        </div>
    )
}
export default AddPost