import {myaxios} from "./helper"

//create post function
export const createPost=(postData)=>{
    //console.log(postData)
    return myaxios.post(
    `/user/${postData.userId}/category/${postData.categoryId}/posts`,postData).then(response=>response.data)

}

//get all posts

export const loadAllposts=(pageNumber,pageSize)=>{

    return myaxios.get(`/Posts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=addeddate&sortDir=desc`)
    .then((response)=>response.data)
}
//load single post of given id

export const loadPost=(postId)=>{

    return myaxios.get("/Posts/"+postId).then(response=>response.data)
}
//create comment
export const createComment=(comment,postId)=>{
    return myaxios.post(`/post/${postId}/comments`,comment)
}
//upload post banner image
export const uploadPostImage=(image,postId)=>
{
   let formData=new FormData()
   formData.append("image",image)

   return myaxios.post(`/post/image/upload/${postId}`,formData,{
    headers:{
        'Content-Type':'multipart/form-data'
    }
   }).then((response)=>response.data)
}