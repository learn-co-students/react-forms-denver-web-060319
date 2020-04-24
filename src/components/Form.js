import React from 'react';

class Form extends React.Component {
  // state = {
  //   firstName: "John",
  //   lastName: "Henry",
  //   submittedData: []
  // }

  // onFormSubmit = event => {
  //   event.preventDefault()
  //   let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
  //   let dataArray = [ ...this.state.submittedData, formData ]
  //   this.setState({ submittedData: dataArray })
  // }

  // listOfSubmissions = () => {
  //   return this.state.submittedData.map(person => {
  //     return <div key={person.id}><li key={person.id}>{person.firstName + ' ' + person.lastName}</li></div>
  //   })
  // }

  // onSubmit={event => this.onFormSubmit(event)}

  render() {
    return (
      <div>
        <form>
          <input 
            type="text" 
            name="firstName" 
            onChange={event => this.props.handleChange(event)} 
            value={this.props.formData.firstName} 
          />
          <input 
            type="text" 
            name="lastName" 
            onChange={event => this.props.handleChange(event)} 
            value={this.props.formData.lastName} 
          />
          <input type="submit"/>
        </form>
        {/* {this.listOfSubmissions()} */}
          
      </div>
    )
  }
}

export default Form;
        