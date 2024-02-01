import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardText } from 'reactstrap'

 function Post({post={title:"This is defualt post title",content:"this is default post content"}}) {
  return (
    
    <Card className='border-0 shadow-sm mt-3'>
      <CardBody>
          <h2>{post.title}</h2>
          <CardText dangerouslySetInnerHTML={{
            __html:post.content.substring(0,10)}
          }>

          
          </CardText>  
          
          <div>

            <Link className='btn btn-secondary ' to={'/posts/'+post.postId}>
            Read more

            </Link>
          
          
          </div>
      
      </CardBody>
    
    </Card>



  )
}
export default Post
