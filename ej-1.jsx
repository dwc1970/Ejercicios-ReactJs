import { useState } from ' react';

function Square({value, onSquareClick }) {
    return (
        <button className='square'onClick={onSquareClick}>
            {value}
            </button>
    );
}

function Board({ xIsNext, Square, onPlay}){
    function handleClick(i) {
        if (calculateWinner(Square) || Square[i]){
            return;
        }
        const nextSquares = Square.slice();
        if (xIsNext){
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = '0',
                   
        }
        onPlay(nextSquares);

    }
    const winner = calculateWinner(Squares);
    let status;
    if (winner) {
        status = 'Winner: '+ winner;

    }else{
        status = 'next player: ' + (xIsNext ? 'X' : '0');

    }

    return (
        <>
        <div className='status'>{status}</div>
        <div className='board.row'>
            <Square value={Square[0]}
        </div>
        
        </>
    )
}