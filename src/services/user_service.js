//user related operation nned for server
import { myaxios } from "./helper";


export const signUp=(user)=>{
 
    return myaxios
    .post("/auth/register",user)
    .then((response)=>response.data);

}

export const loginUser=(loginDetail)=>{
    return myaxios.post('/auth/login',loginDetail).then((response)=>response.data)
}