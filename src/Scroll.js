import React from 'react' ;

const Scroll = (props) =>{
    return(
       <div style={{ overflowY: 'scroll' , height: '500px' , border: '3px solid black' , margin : '10px'}}>
        {props.children}
       </div>
    ) ;
}
export default Scroll ;