import { Link, useParams } from "react-router-dom"
import Base from "../components/Base"
import { Container ,Row,Col, CardBody, CardText,Card, Input, Button} from "reactstrap";
import { useEffect } from "react";
import { createComment, loadPost } from "../services/post-service";
import { useState } from "react";
import {toast} from 'react-toastify'
import { BASE_URL } from "../services/helper";

const PostPage=()=>{

   const {postId} =useParams()

   const[post,setPost]=useState(null)

   const [comment,setComment]=useState({
    content:''
    } )
    const submitPost=()=>{
        createComment(comment,post.postId).then(data=>{
            console.log(data)
        }).catch(error=>{
            console.log(error)
        })
    }

   useEffect(()=>{
    //load post of post id
    loadPost(postId).then(data=>{
        console.log(data)
        setPost(data)
    }).catch(error=>{
        console.log(error)
        toast.error("error in loading post")
    })


},[])
    const printDate=(number)=>{

        return new Date(number).toLocaleString()



    }
    return(
       <Base>

        <Container className="mt-4">

        <Link to="/">Home   
     
          </Link> / {post&&(<Link to="">{post.title}</Link>)}
          <Row>
          <Col md={{
            size:12
          }}>
           
          <Card className="mt-3">
        {
            (post)&&(
                <CardBody>
                <CardText>Posted By  <b>{post.user.name} on <b>{printDate(post.addedDate)}</b></b></CardText>
                <CardText>
                <span className="text-muted">{post.category.categoryTitle}</span>
                </CardText>
                <CardText className="mt-3">
                <h3>{post.title}</h3>
                </CardText>
                <div className="image-container mt-3"style={{width:'50%'}}>
                <img className="img-fluid" src={BASE_URL+'/post/image/'+post.imageName} alt="image loading" />
                
                </div>
                <CardText className="mt-5" dangerouslySetInnerHTML={{__html:post.content}}>

                
                </CardText>
                
                
                </CardBody>
            )
        }
          
          
          </Card>
          
          <h1>load the post from data base</h1>
          </Col>
          
          
          
          </Row>
          <Row className="my-4">
              <Col md={{size:9,
                offset:1
             }

            }>
            <h3>Comments  </h3>
            {
                post && post.comments?.map((c,index)=>(
                    <Card className="mt-2 border-0" key={index}>
                    <CardBody>
                    <CardText>
                    {c.content}
                    </CardText>

                    </CardBody>
                    </Card>
                ))
            }
            <Card className="mt-2 border-0" >
            <CardBody>
           
            <Input type="textarea" placeholder="enter comment here"
            value={comment.comments}
            onChange={(event)=>setComment({content:event.target.value})}
            
            />
            <Button onClick={submitPost}
            
            className="mt-2" color="primary">Submit</Button>
            </CardBody>
            </Card>

              
              
              </Col>
          
          
          
          </Row>
     
     
     
     </Container>
       
       
       
       </Base>
    )
}
export default PostPage