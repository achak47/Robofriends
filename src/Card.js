import React from 'react' ;
import './index.css' ;
const Card = (props)=> {
  var str = 'https://robohash.org/'+ props.name ;
    return (
      <div className='tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5'>
      <img src={str} class="card-img-top" alt="Image Loading..."></img>
      <div>
        <h5>{props.name}</h5>
        <p>{props.username}</p>
        <p>{props.email}</p>
      </div>
    </div>
     
    );
  }  
  export default Card;
  