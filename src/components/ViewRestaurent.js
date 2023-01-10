import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Image} from 'react-bootstrap';
import RestOp from './RestOp';
import RestReview from './RestReview';
import { useDispatch, useSelector } from 'react-redux';


function ViewRestaurent() {
    const params =useParams()
    console.log(params.id);
    const [allRestaurents,setRestaurent]=useState([])

    const getRestaurent = async ()=>{
      await fetch('/restaurent.json')
      .then((data)=>{
        data.json()
        .then((result)=>{
           setRestaurent(result.restaurants);
        })
      })
     }
     useEffect(()=>{
      getRestaurent()
    },[])
    const result =useSelector(state=>state.restaurentReducer)
    const {restaurentList} = result

const viewRest=allRestaurents.find(item=>item.id==params.id)
console.log(viewRest);

  return (
    <>
    {
      viewRest ? (
        <Row className='p-3'>
          <Col>
          <Image src={viewRest.photograph} fluid/>

          </Col>
          <Col>
          <p>ID:{viewRest.id}</p>
          <h1>{viewRest.name}</h1>
          <h5>Cuisine_type:{viewRest.cuisine_type}</h5>
          <h5>Neighborhood:{viewRest.neighborhood}</h5>
          <h6>Address:{viewRest.address}</h6>
          <RestOp operate={viewRest.operating_hours}/>
          <br></br>
          <RestReview reviews={viewRest.reviews}/>
      

          </Col>
        </Row>
      ): 'null'
    }
    </>
  )
}

export default ViewRestaurent