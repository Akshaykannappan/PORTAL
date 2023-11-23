import React, { Component } from 'react'

export default class Propsclasscomp extends Component {
  render() {
    return (
      <div>
        <h1>I am at {this.props.name}</h1>
      </div>
    )
  }
}
Propsclasscomp.defaultProps={name : "fghjk"}
