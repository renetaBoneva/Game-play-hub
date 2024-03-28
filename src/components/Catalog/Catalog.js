import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import './Catalog.css'
import * as gameService from '../../services/gamesService';
import { toast } from "react-toastify";
import { Loading } from "../common/Loading/Loading";

export function Catalog() {
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        gameService.getAllGames()
            .then(res => {
                setGames(res);
                setIsLoading(false);
            })
            .catch(err => toast.error(err.message));

    }, []);

    if (isLoading) {
        return <Loading />
    } else {
        return (
            <div className="gameCoverWrapper">
                {games
                    ? games.map(game => {
                        return (
                            <div className="gameCover" key={game._id}>
                                <Link to={game.link}><img alt={game.name} src={game.coverImgPath} /></Link>
                            </div>
                        )
                    })
                    : <h2>There are no available games.</h2>
                }
            </div>);
    }
}