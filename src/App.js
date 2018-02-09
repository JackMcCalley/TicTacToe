import React, { Component } from 'react';
import './App.css';
import Board from './board.js'
import Square from './square.js'

class App extends Component {

    render() {
      return (
        <div>
        <h1><span id="tic">tic</span><span id="tac"> tac</span><span id="toe"> toe</span></h1>
            <Board />
            <br/>
        </div>
      )
    }
}
export default App;
