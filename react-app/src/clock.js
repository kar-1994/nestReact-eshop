import React, { useState } from 'react';
import { connect } from 'react-redux';
  
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
      componentDidMount(){
        this.timerId=setInterval(()=>{this.tick()},1000)
      }
      componentWillUnmount(){
        clearInterval(this.timerId);
      }

      tick(){
        this.setState({date: new Date()})
      }

    render() {
      return (
        <div>
          <h1>Hello, world! Clock Type {this.props.ctype}</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          <h3>{this.props.token}</h3>
        </div>
      );
    }
  }
function mapStateToProps(state){
return {token:state.user.token}
}


export default connect(mapStateToProps)(Clock);
