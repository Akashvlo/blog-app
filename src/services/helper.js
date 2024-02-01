import axios from "axios";
import { getToken } from "../auth";
export const BASE_URL='http://localhost:9090/api/v1';

export const myaxios=axios.create({
    baseURL:BASE_URL,                                       //SERVER CALLING
});      


export const privateaxios=axios.create({
    baseURL:BASE_URL
})

privateaxios.interceptors.request.use(config=>{

    const token=getToken()
//console.log(token)
    if(token){
        config.headers['Authorization'] ='Bearer ${token}'
        
        return config
    } 
}, error=>Promise.reject(error))




