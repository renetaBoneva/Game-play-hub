import { Link } from "react-router-dom";

import './Catalog.css'

export function Catalog() {
    const games = [
        {
            "_id": 1,
            "name": 'Memory game',
            "coverImg": "memory_game/memory_game_cover.png",
            'link': '/memoryGame'
        },
        {
            "_id": 2,
            "name": 'Tic Tac Toe game',
            "coverImg": "tic_tac_toe_game/tic_tac_toe_game_cover.png",
            'link': '/ticTacToeGame'
        },
    ];

    return (
        <div className="gameCoverWrapper">
            {games.map(game => {
                return (
                    <div className="gameCover" key={game._id}>
                        <Link to={game.link}><img alt={game.name} src={game.coverImg} /></Link>
                    </div>
            )})}
        </div>);
}