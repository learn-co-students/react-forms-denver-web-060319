// Code ControlledInput Component Here
import React from 'react'
import Banner from "./Banner"
// import "../app.css"

export default class Example extends React.Component{
  state = {
    firstName: "",
    lastName: ""
  }

 

  updateName = event => {
    this.setState ({
      [event.target.name]: event.target.value
    })
  }

  changePastSeven = () => {
    if (this.state.firstName.length > 7 && this.state.firstName.length % 7 === 0) {
      return 7      
    } else if (this.state.firstName.length > 7) {
      return this.state.firstName.length % 7
    } else {
      return this.state.firstName.length
    }
  }

  changeColor = (l) => {
    const whichColor = {
      1: "red",
      2: "orange",
      3: "yellow",
      4: "green",
      5: "blue",
      6: "indigo",
      7: "violet"
    }
    return whichColor[l];
  }

  

  render() {
    return(
      <div>
        <Banner className={this.changeColor(this.changePastSeven())} fullName={this.state.firstName + " " + this.state.lastName} />
        <form>
          <input onChange={this.updateName} type="text" name="firstName" value={this.state.firstName} />
          <input onChange={this.updateName} type="text" name="lastName" value={this.state.lastName} />
        </form>
      </div>
    )
  }
}