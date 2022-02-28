import React,{useState} from 'react'

function About(props) {
  const [toggle, setToggle] = useState(false);
 const  {name,id,url,image,info,price,RemoveSingleItem}=props.data;
  return (
  

<div class="card m-5" >
  <img class="card-img-top" src={image} alt="Card image cap" style={{height:'350px'}} />
  <div class="card-body">
  <pre>   <h5 class="card-title">{name}            ${price}</h5></pre> 
    <p class="card-text">{toggle? info : `${info.substring(0,200)}....`}</p>
 
 <button onClick={()=>setToggle(!toggle)} className='btn btn-success'>{toggle?'show Less':"Read More..."}</button>
 <div>
 <button className='btn btn-outline-danger w-75 py-2 mt-5' onClick={()=>props.RemoveSingleItem(id)}>Not Intrested </button>
 </div>

  </div>
</div>
  
  )
}

export default About