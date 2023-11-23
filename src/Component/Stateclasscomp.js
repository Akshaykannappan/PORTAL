import React, { Component } from 'react'

export default class Stateclasscomp extends Component {
    state={name:"Leo",place:"SKCET",Age:"25"}
    changeCollege=()=>{this.setState({name:"Atria"})}
  render() {
    return (
      <div>
        <h1>nice college {this.state.name}</h1>
        <button onClick={this.changeCollege}>Click me</button>
      </div>
    )
  }
}
