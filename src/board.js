import React, { Component } from 'react';
import './App.css';
import Square from './square.js'
import App from './App.js'

function defaultGame() {
    return {
        board: ["-","-","-","-","-","-","-","-","-"],
        currentPlayer: "x",
        winner: ''
    }
}

class Board extends Component {
  constructor(props) {
    super(props)

    this.state = defaultGame()
  }

    button(cont) {
        let { board, currentPlayer, winner } = this.state

        // ALREADY WON CHECKER
        if (this.checkForWin(board)) {
            return
        }

        // BOARD UPDATER
        board[cont] = currentPlayer

        //WIN CHECKER
        if (this.checkForWin(board)) {
            winner = currentPlayer + " is the winner"
            currentPlayer = ""
        } else if (board.indexOf("-") === -1) { // CATS GAME CHECKER
            winner = "cat's game"
            currentPlayer = ""
        }

        // CURRENT PLAYER SWITCHER
        if (currentPlayer != "") {
            currentPlayer = (currentPlayer === "x") ? 'o' : 'x'
        }

        //BOARD UPDATER
        this.setState({
            board: board,
            currentPlayer: currentPlayer,
            winner: winner
        })


    }

  // Production of Board Tiles
  renderSquare(i) {
    return <Square tileContent={this.state.board[i]} currentSquare={i} clickCheck={this.button.bind(this)}/>
  }

  //Check for wins
  checkForWin(board) {
    if (
      board[0] == "x" && board [1] == "x" &&  board[2] == "x" ||
      board[3] == "x" && board [4] == "x" &&  board[5] == "x" ||
      board[6] == "x" && board [7] == "x" &&  board[8] == "x" ||
      board[0] == "x" && board [3] == "x" &&  board[6] == "x" ||
      board[1] == "x" && board [4] == "x" &&  board[7] == "x" ||
      board[2] == "x" && board [5] == "x" &&  board[8] == "x" ||
      board[0] == "x" && board [4] == "x" &&  board[8] == "x" ||
      board[2] == "x" && board [4] == "x" &&  board[6] == "x" ||

      board[0] == "o" && board [1] == "o" &&  board[2] == "o" ||
      board[3] == "o" && board [4] == "o" &&  board[5] == "o" ||
      board[6] == "o" && board [7] == "o" &&  board[8] == "o" ||
      board[0] == "o" && board [3] == "o" &&  board[6] == "o" ||
      board[1] == "o" && board [4] == "o" &&  board[7] == "o" ||
      board[2] == "o" && board [5] == "o" &&  board[8] == "o" ||
      board[0] == "o" && board [4] == "o" &&  board[8] == "o" ||
      board[2] == "o" && board [4] == "o" &&  board[6] == "o"
    ) {
      return true
    }
  }

    choosePlayer(){
        let { board, currentPlayer} = this.state
        let check = true

        board.forEach(function(el){
            if (el != "-") {
            check = false
        }})

        if (check){
            currentPlayer = (currentPlayer === "x") ? 'o' : 'x'
        }

        this.setState({currentPlayer: currentPlayer})
    }


  newGame() {
    this.setState(defaultGame())
  }

  // Table holding our Game Board
  render() {
    return (
      <div>
        <table id="table1">
          <tbody>
              <tr>
                <td id="square0">{this.renderSquare(0)}</td>
                <td id="square1">{this.renderSquare(1)}</td>
                <td id="square2">{this.renderSquare(2)}</td>
              </tr>
              <tr>
                <td id="square3">{this.renderSquare(3)}</td>
                <td id="square4">{this.renderSquare(4)}</td>
                <td id="square5">{this.renderSquare(5)}</td>
              </tr>
              <tr>
                <td id="square6">{this.renderSquare(6)}</td>
                <td id="square7">{this.renderSquare(7)}</td>
                <td id="square8">{this.renderSquare(8)}</td>
              </tr>
          </tbody>
        </table>
        <table id="table2">
        <tr>
          <td><button className="bottomButton" onClick={() => this.newGame()}>reset</button></td>
          <td><button className="bottomButton">{this.state.winner}</button></td>
          <td><button className="bottomButton" onClick={() => this.choosePlayer()} >current player: {this.state.currentPlayer}</button></td>
        </tr>
        </table>
      </div>
    )
  }
}
export default Board
