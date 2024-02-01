//import data from 'react'
//authenticate checking or isloggedIn

export const isLoggedIn=()=>{
   let data= localStorage.getItem("data")
    if(data!=null){
        return true;
    }
    else{
        return false;
    }
}



//dologin=>data=> set to local storage

export const doLogin=(data,next)=>{
    localStorage.setItem("data",JSON.stringify(data))
    next()
}




//dologout=>remove from local storage

export const doLogout=(next)=>{
    localStorage.removeItem("data")
    next()
}



//get current user

export const getCurrentUserDetail=()=>{
    if(isLoggedIn()){
       // console.log(JSON.parse(localStorage.getItem("data")).user)
         return JSON.parse(localStorage.getItem("data")).user;

    }else{
        return undefined
    }
}

export const getToken=()=>{

     if(isLoggedIn()){
      return  JSON.parse(localStorage.getItem("data")).token
     }else{
        return null;
     }
}
