import React, { useState } from 'react'
import { useEffect } from 'react'
import { toast } from "react-toastify";
import { loadAllposts } from '../services/post-service'
import {Row,Col,Pagination,PaginationItem,PaginationLink, Container} from 'reactstrap'
import Post from './Post'
import InfiniteScroll from 'react-infinite-scroll-component';

function NewFeed() {


    const [postContent,setPostContent]=useState({
        content:[],
                                                 //by default values
        totalPages:'',
        totalElements:'',
        pageSize:'',
        lastPage:true,
        pageNumber:''

    })

    const [currentPage,setCurrentPage]=useState(0)
  



    useEffect(()=>{

      changePage(currentPage)
     },[currentPage])

       const changePage=(pageNumber=0,pageSize=5)=>{

        if(pageNumber>postContent.pageNumber && postContent.lastPage){
          return 
        }{}
        if(pageNumber<postContent.pageNumber && postContent.lastPage==0){
          return 
        }
       // if(postContent.lastPage){
         //   return
      //s  }
        loadAllposts(pageNumber,pageSize).then(data=>{
            setPostContent({
              content:[...postContent.content,...data.content],
              totalPages:data.totalPages,
              totalElements:data.totalElements,
              pageSize:data.pageSize,
              lastPage:data.lastPage,
              pageNumber:data.pageNumber
            })
            console.log(data)
          //  window.scroll(0,0)
        }).catch(error=>{
            toast.error("Error in loading post")

        })
       }
       const ChangePageInfinite=()=>{
        console.log("page changed")
        setCurrentPage(currentPage+1)
       }
     return(
      


        <div className="container-fluid">
        

        <Row>
           <Col  md={
            {
                size:12
                

           }
        }>
           <h1>Blog Count ({postContent?.totalElements})</h1>

           <InfiniteScroll 
           dataLength={postContent.content.length} 
           next={ChangePageInfinite}
           hasMore={!postContent.lastPage}
           loader={<h4>Loading</h4>}
           endMessage={
            <p style={{textAlign:'center'}}>
            <b>poor network!!!!</b>
            
            </p>
           }
           
           >
           {
            postContent.content.map((post)=>(
                <Post post={post}  key={post.postId}/>
            ))
           }
           
           </InfiniteScroll>


              
           
      </Col>

        
         </Row>
        
        </div>
        )
          
}
export default NewFeed
