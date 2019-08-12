import React, { Component } from 'react';

class Form extends Component {
    state = { 
        firstName: "Wes", 
        lastName: "Long"
     }

     handleFirstNameChange = (event) => {
         this.setState({
            firstName: event.target.value
         })
     }
     
     handleSecondNameChange = (event) => {
         this.setState({
            lastName: event.target.value
         })
     }


    render() { 
        return ( 
            <form>
                <input text="text" name="firstName" 
                onChange={this.handleFirstNameChange}
                value={this.state.firstName}/>
                <input text="text" name="lastName"
                onChange={this.handleSecondNameChange} 
                value={this.state.lastName}/>
            </form>
         );
    }
}
 
export default Form;

