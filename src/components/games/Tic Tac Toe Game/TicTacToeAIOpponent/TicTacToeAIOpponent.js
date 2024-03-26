/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from 'react';
import * as ticTacToeGameService from '../../../../services/ticTacToeService'
import { useAuthContext } from '../../../../hooks/useAuthContext';

export function TicTacToeAIOpponent() {
    const [board, setBoard] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]);
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [gameScore, setGameScore] = useState({ 'O': 0, 'X': 0 });
    const [winner, setWinner] = useState('');
    const [gameStatus, setGameStatus] = useState('ongoing');
    const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);
    const { username } = useAuthContext();

    useEffect(() => {
        if (currentPlayer === 'O' && gameStatus === 'ongoing') {
            makeAIMove().then(res => {
                const response = res.aiResponse;
                const newBoard = JSON.parse(response).board;

                setBoard(newBoard);
                setCurrentPlayer('X');
                setIsWaitingForResponse(false);
            });
        }
    }, [currentPlayer, gameStatus]);

    useEffect(() => {
        checkGameStatus();
    }, [board]);

    useEffect(() => {
        if (winner && winner === 'O') {
            setGameScore(score => ({ ...score, 'O': score.O++ }));
        } else if (winner && winner === 'X') {
            setGameScore(score => ({ ...score, 'X': score.X++ }));
        }

    }, [winner])

    function checkGameStatus() {
        for (let i = 0; i < 3; i++) {
            // if there is a row match
            if (board[i][0] === board[i][1]
                && board[i][2] === board[i][1]
                && board[i][0] !== '') {
                setGameStatus(`${board[i][0]} wins!`);
                setWinner(board[i][0])
                return;
            }

            // if there is a column match
            if (board[0][i] === board[1][i]
                && board[2][i] === board[1][i]
                && board[0][i] !== '') {
                setGameStatus(`${board[0][i]} wins!`);
                setWinner(board[0][i])
                return;
            }

        }

        // first diagonal
        if (board[0][0] === board[1][1]
            && board[2][2] === board[1][1]
            && board[0][0] !== ''
        ) {
            setGameStatus(`${board[0][0]} wins!`);
            setWinner(board[0][0])
            return;
        }

        //second diagonal
        if (board[0][2] === board[1][1]
            && board[2][0] === board[1][1]
            && board[0][2] !== ''
        ) {
            setGameStatus(`${board[0][2]} wins!`);
            setWinner(board[0][2]);
            return;
        }

        // If there are no more moves left but there is no winner
        if ((board[0].join('') + board[1].join('') + board[2].join('')).length >= 9) {
            setGameStatus(`Nobody wins!`);
            setWinner('');
            return;
        }
    }

    async function makeAIMove() {
        setIsWaitingForResponse(true);
        try {
            const aiResponse = await ticTacToeGameService.aiResponse(board);

            return aiResponse;
        } catch (err) {
            console.log(err);
        }
    }

    function handleButtonFieldClick(row, col) {
        if (board[row][col] === ''
            && currentPlayer === 'X'
            && gameStatus === 'ongoing') {

            board[row][col] = 'X'
            setBoard([...board]);
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

    function handleNewRound() {
        setBoard([
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ]);
        setWinner('');
        setGameStatus('ongoing');
        setCurrentPlayer('X');
    }

    function handleNewGame() {
        handleNewRound();
        setGameScore({ 'O': 0, 'X': 0 });
    }

    return (
        <div className='gameWrapper ticTacToeWrapper'>
            <h2>Tic Tac Toe</h2>
            {gameStatus === 'ongoing'
                ? (<><p>Current player:</p>
                    <div className='currentPlayerWrapper'>
                        <p className={isWaitingForResponse ? 'waitingPlayer' : 'currentPlayer'}>{username ? username : 'Player'}: X</p>
                        <p className={isWaitingForResponse ? 'currentPlayer' : 'waitingPlayer'}>AI: O</p>
                    </div></>)
                : (<>
                    {gameStatus !== `Nobody wins!` && (
                        <p className='winnerP'>The winner is {winner === 'O' ? 'AI (O)' : (username ? `${username} (X)` : 'Player  (X)')}</p>
                    )}
                    <button className='newRoundButton' onClick={() => handleNewRound()}>New round</button>
                </>)}
            <div className='ticTacToeBoard'>
                {board.map((row, i) => {
                    return (
                        <div className='boardRow' key={i}>
                            {row.map((_, j) => <Fragment key={j}>{boardButtonField(i, j)}</Fragment>)}
                        </div>
                    );
                })}
            </div>
            <div className='tikTacToeScoreWrapper'>
                <p>Game score:</p>
                <div className='currentPlayerWrapper'>
                    <p className=''>{username ? username : 'Player'} (X): {gameScore.X}</p>
                    <p className=''>AI (O): {gameScore.O}</p>
                </div>
                <button className='newGameButton' onClick={() => handleNewGame()}>New game</button>
            </div>
        </div>
    );
}