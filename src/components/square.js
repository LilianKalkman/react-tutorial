import React, { Component } from 'react';

class Square extends Component {
  constructor(props){
    super(props);
    this.state = { value: null };
  }

  onSquareClick(event){
    this.setState({value: 'X'});
  }

  render() {
    return (
      // <button className="square" onClick={()=> this.setState({value: 'X'})}>
      <button className="square" onClick={this.onSquareClick.bind(this)}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;
