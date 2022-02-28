import React, { useState,useEffect } from 'react'
import Loading from './Loading';
import Tour from './Tour';
// import data from '../data'
const url = 'https://course-api.com/react-tours-project'
const Home = () => {

 const [load,setLoad]=useState(true);
 const  [tours,setTours]=useState([]);


 ///Fetch Data  from  server
 const  FetchData=async ()=>{
   setLoad(true);
   const  res=await fetch(url);
   const  data=await res.json();
   setLoad(false)
   setTours(data)
 }
///Remove single tour
const RemoveSingleItem=(id)=>{
  const  newItem=tours.filter((single)=>single.id !==id);
  console.log(newItem)
   setTours(newItem)
   alert('you Removed the post ')
}

 useEffect(()=>{
  FetchData()

 },[]) 

if(load){
 return <Loading  />
}

  return (
    <div className='container  py-5 mt-5 '  >
   
<Tour tour={tours}  RemoveSingleItem={RemoveSingleItem} />

    </div>);

};

export default Home;
