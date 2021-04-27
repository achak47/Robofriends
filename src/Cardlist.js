import React from 'react' ;
import Card from './Card' ;
import './index.css';
const Cardlist = ({ Robots })=>{
    var robots = Robots.map((element,index)=><Card id={ element.id} name={element.name} username={element.username} email={element.email}/>) ;
    if(Robots.length == 0)
    {
       robots = <p className='colour'>Sorry Couldn't find your search</p>
    }
return(
<div>
{ robots } ;
</div>
) ;
}
export default Cardlist ;