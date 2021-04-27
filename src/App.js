import React, { Component } from 'react';
import './index.css';
import Cardlist from './Cardlist' ;
import Search from './Search' ;
import Scroll from './Scroll' ;
class App extends Component{
constructor() {
  super() 
  this.state = {
    robots : [] ,
    searchfield : ''
  }
}
onSearch = (event)=>{
  this.setState({ searchfield: event.target.value})
}
componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=> response.json() )
  .then(users => {this.setState({robots: users})}) ;
}
render(){
  const filterrobots = this.state.robots.filter(robots =>{
    return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
  }) 
  if(this.state.robots.length === 0){
    return <h1>loading...</h1> 
  }else{
   return (
    <div class='tc'> 
    <Search searchChange={this.onSearch}/>
     <Scroll>
      <Cardlist Robots= {filterrobots} />
     </Scroll>
     </div>
          ); 
      } 
        }
}
export default App ;