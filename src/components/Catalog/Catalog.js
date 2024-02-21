import { Link } from "react-router-dom";
import { useEffect } from "react";

import './Catalog.css'

export function Catalog() {
    const games = [
        {
            "_id": 1,
            "name": 'Memory game',
            "coverImg": "memory_game/memory_game_cover.png",
            'link': '/memoryGame'
        }
    ];

    useEffect(() => {
        // document.body.style.backgroundColor = '#e3a1eb';
        // document.body.style.color = '#377702';

        return () => {
        }
    }, []);

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