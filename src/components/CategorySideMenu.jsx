import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { loadAllCategories } from '../services/category-service'
import { toast } from "react-toastify"

function CategorySideMenu() {

    const [categories,setCategories]=useState([])
    useEffect(()=>{
        loadAllCategories().then(data=>{
            console.log("this loading categoires")
            setCategories([...data])
        }).catch(error=>{
            console.log(error)
            toast.error("error in loading categoires")
        })


    },[])



  return (
    <div>
      <ListGroup>
      <ListGroupItem action={true} className='border-0'>
      All Blogs
      </ListGroupItem>
     {categories && categories.map((cat,index)=>{

        return(
            <ListGroupItem key={index}>
                
                {cat.categoryTitle}
            
            </ListGroupItem>
        )
        }
        )
  }</ListGroup>
    </div>
  )
}

export default CategorySideMenu
