import React, {useState,useEffect} from 'react'
import RestaurentCard from './RestaurentCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {RestaurentListAction} from '../Action/restaurentListAction';
import { useDispatch, useSelector } from 'react-redux';


function Restaurentlist() {
    // create state to hold all restaurent
    const [allRestaurents,setRestaurent]=useState([])

    // function to call api to get all restaurent.json
  // const getRestaurent = async ()=>{
  //  await fetch('/restaurent.json')
  //  .then((data)=>{
  //    data.json()
  //    .then((result)=>{
  //       setRestaurent(result.restaurants);
  //    })
  //  })
  // }
  const dispatch=useDispatch()
  const result =useSelector(state=>state.restaurentReducer)
  const {restaurentList} = result


  useEffect(()=>{
    // getRestaurent()
    dispatch(RestaurentListAction())
    
  },[])
  return (
    <Row>
      {
   restaurentList.map(item=>(
    <Col sm={12} md={6} lg={4} xl={3}><RestaurentCard restaurent={item}/></Col>
   ))
      }
    </Row>
  ) 
}

export default Restaurentlist