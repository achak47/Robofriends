import React, { Component } from 'react' ;
class ErrorBoundry extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            hasError: false 
        }
    }
    componentDidCatch(error,info){                                 //kind of try catch in method of error catching
        this.setState({ hasError: true})
        console.log(error,info,'Noo') ;
    }
 render(){
     if(this.state.hasError){
         <h1>Oops Something went wrong</h1>
     }
    return this.props.children
 }
}
 export default ErrorBoundry ;