import { useEffect, useState, Fragment } from "react";
import { useAuthContext } from "../../../../hooks/useAuthContext";

export function TicTacToeFriendOpponent({ inputSign }) {
    const [board, setBoard] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]);
    const [userSign] = useState(inputSign);
    const [friendsSign] = useState(inputSign === 'X' ? 'O' : 'X');
    const [currentPlayer, setCurrentPlayer] = useState(inputSign);
    const [gameScore, setGameScore] = useState({ 'O': 0, 'X': 0 });
    const [winner, setWinner] = useState('');
    const [gameStatus, setGameStatus] = useState('ongoing');
    const { username } = useAuthContext();

    useEffect(() => {
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
    }, [board]);

    useEffect(() => {
        if (winner && winner === 'O') {
            setGameScore(score => ({ ...score, 'O': score.O++ }));
        } else if (winner && winner === 'X') {
            setGameScore(score => ({ ...score, 'X': score.X++ }));
        }
    }, [winner])

    function handleButtonFieldClick(row, col) {
        if (board[row][col] === ''
            && gameStatus === 'ongoing') {
            board[row][col] = currentPlayer;
            setBoard([...board]);
            setCurrentPlayer(cp => cp === 'O' ? 'X' : 'O');
        }
    }

    function boardButtonField(row, col) {
        return (
            <button
                className='boardButtonField'
                disabled={gameStatus !== 'ongoing'}
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
        setCurrentPlayer(inputSign);
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
                        <p className={currentPlayer === userSign ? 'currentPlayer' : 'waitingPlayer'}>{username ? username : 'Player 1'}: {userSign}</p>
                        <p className={currentPlayer === userSign ? 'waitingPlayer' : 'currentPlayer'}>{username ? `${username}'s friend` : 'Player 2'}: {friendsSign}</p>
                    </div></>)
                : (<>
                    <p className='winnerP'>The winner is {winner === userSign
                        ? (username ? `${username} (${userSign})` : `Player 1 (${userSign})`)
                        : (username ? `${username}'s friend (${friendsSign})` : `Player 2 (${friendsSign})`)
                    }</p>
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
                    <p className=''>{username ? username : 'Player'} ({userSign}): {gameScore.X}</p>
                    <p className=''>{username ? `${username}'s friend` : 'Player 2'} ({friendsSign}): {gameScore.O}</p>
                </div>
                <button className='newGameButton' onClick={() => handleNewGame()}>New game</button>
            </div>
        </div>
    );
}