
import React, { useState } from 'react'
import './styles.css'


function Square({ value, onClick }) {

    return <button onClick={onClick}
        className='square'>{value}</button>
}

const TicTacToe = () => {

    const [squares, setSquares] = useState(Array(9).fill(''))
    const [isXTurn, isYTurn] = useState(true);
    console.log(squares);

    function getwinner(squares) {
        const winningPattern = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
        ]
        
        for(let i=0;i<winningPattern.length;i++){
            if(squares[x] && squares[x]== squares[y] && squares[x] == squares[z]){
                squares[x]
            }
        }
    }

    function handleClick(getCurrentSquare) {

        let cpySquares = [...squares];
        cpy
    }


    return (
        <div className='tic-tac-toe-container'>
            <div className='row'>
                <Square onClick={() => handleClick(0)} />
                <Square onClick={() => handleClick(1)} />
                <Square onClick={() => handleClick(2)} />
            </div>
            <div className='row'>
                <Square onClick={() => handleClick(3)} />
                <Square onClick={() => handleClick(4)} />
                <Square onClick={() => handleClick(5)} />
            </div>
            <div className='row'>
                <Square onClick={() => handleClick(6)} />
                <Square onClick={() => handleClick(7)} />
                <Square onClick={() => handleClick(8)} />
            </div>
        </div>
    )
}

export default TicTacToe
