import React, { Component } from 'react'

export default class Notification extends Component {

  constructor(props){
    super(props);
    this.state={};
  }

  componentDidMount(){
    console.log(this.props.id,'componentDidMount() called.');
  }

  componentDidUpdate(){
    console.log(this.props.id,'componentDidUpdate() called.');
  }

  componentWillUnmount(){
    console.log(this.props.id,'componentWillMount called');
  }

  render() {
    
    return (
      <>
  <div id="root" className="container">
  <div classNameName="alert alert-info" role="alert">
  <i className="fa-solid fa-bell"></i>
    <span>{this.props.id}</span>
    <h4 className="alert-heading">{this.props.header}</h4>
    <p>
      {this.props.message}
    </p>
    <hr/>
    <i className="fa-solid fa-clock-rotate-left"></i>
    <span className="mb-0">
      {
        new Date().toLocaleDateString()+" "+new Date().toLocaleTimeString()
      }
    </span>
  </div>
  </div>
      </>
    )
  }
}

