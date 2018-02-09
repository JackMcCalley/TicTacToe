import React, { Component } from 'react';
import './App.css';
import Board from './board.js'
import App from './App.js'

class Square extends Component {

  //Individual Game Tiles
  render() {
    let disabled = false

    if(this.props.tileContent !== "-") {
      disabled = true
    }

    return (
      <button
        className="square"
        disabled={disabled}
        onClick={() => this.props.clickCheck(this.props.currentSquare)} 
        placeholder="test">
          {this.props.tileContent}
      </button>
    )
  }
}

export default Square
