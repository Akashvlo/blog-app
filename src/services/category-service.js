import { myaxios } from "./helper";

export const loadAllCategories=()=>{
    return myaxios.get('/categories/').then(response=>{return response.data})
}