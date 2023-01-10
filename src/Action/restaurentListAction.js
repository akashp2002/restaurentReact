import axios from "axios";
import {R_SUCCESS,R_FAIL} from '../constants/restaurentConstant';

export  const RestaurentListAction = ()=> async (dispatch) =>{
    try{
 const result= await  axios.get('/restaurent.json')
 console.log(result.data.restaurants);
 dispatch({
    type:R_SUCCESS,
    payload:result.data.restaurants

 })   
}  
catch(error){
    dispatch({
        type:R_FAIL,
        error:error
    })
}       
}            