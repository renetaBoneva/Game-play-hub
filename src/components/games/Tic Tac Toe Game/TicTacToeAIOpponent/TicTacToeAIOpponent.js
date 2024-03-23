/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from 'react';
import * as ticTacToeGameService from '../../../../services/ticTacToeService'

export function TicTacToeAIOpponent() {
    
    const [board, setBoard] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]);
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [gameStatus, setGameStatus] = useState('ongoing');
    const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);

    useEffect(() => {
        if (currentPlayer === 'O' && gameStatus === 'ongoing') {
            makeAIMove()
        }
    }, [currentPlayer, gameStatus]);

    useEffect(() => {
        checkGameStatus();

        function checkGameStatus() {
            for (let i = 0; i < 3; i++) {
                // if there is a row match
                if (board[i][0] === board[i][1]
                    && board[i][2] === board[i][1]
                    && board[i][0] !== '') {
                    setGameStatus(`${board[1][1]} wins!`);
                    return;
                }

                // if there is a column match
                if (board[0][i] === board[1][i]
                    && board[2][i] === board[1][i]
                    && board[0][i] !== '') {
                    setGameStatus(`${board[1][1]} wins!`);
                    return;
                }

            }

            // first diagonal
            if (board[0][0] === board[1][1]
                && board[2][2] === board[1][1]
                && board[0][0] !== ''
            ) {
                setGameStatus(`${board[1][1]} wins!`);
                return;
            }

            //second diagonal
            if (board[0][2] === board[1][1]
                && board[2][0] === board[1][1]
                && board[0][2] !== ''
            ) {
                setGameStatus(`${board[1][3]} wins!`);
                return;
            }
        }
    }, [board]);

    async function makeAIMove() {
        setIsWaitingForResponse(true);
        try {
            const aiResponse = await ticTacToeGameService.aiResponse(board);

            console.log(aiResponse);
        } catch (err) {
            console.log(err);
        }

        setIsWaitingForResponse(false);
    }

    function handleButtonFieldClick(row, col) {
        if (board[row][col] === ''
            && currentPlayer === 'X'
            && gameStatus === 'ongoing') {
            setBoard(b => {
                b[row][col] = 'X'
                return b;
            })
            setCurrentPlayer('O');
        }
    }

    function boardButtonField(row, col) {
        return (
            <button
                className='boardButtonField'
                disabled={isWaitingForResponse || gameStatus !== 'ongoing'}
                onClick={() => handleButtonFieldClick(row, col)}
            >
                {board[row][col]}
            </button>
        );
    }

    return (
        <div className='gameWrapper ticTacToeWrapper'>
            <h2>Tic Tac Toe</h2>
            <p>Current player: {currentPlayer}</p>
            <div className='ticTacToeBoard'>
                {board.map((row, i) => {
                    return (
                        <div className='boardRow' key={i}>
                            {row.map((_, j) => <Fragment key={j}>{boardButtonField(i, j)}</Fragment>)}
                        </div>
                    );
                })}
            </div>
            <p>Game status: {gameStatus}</p>
        </div>
    );
}