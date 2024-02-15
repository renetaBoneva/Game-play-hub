import { useEffect, useState } from 'react';
import * as style from './MemoryGame.css'

export function MemoryGame() {
    const [cards, setCards] = useState([]);

    const images = [
        { src: 'memory_game/cancer.jpg' },
        { src: 'memory_game/turtle.jpg' },
        { src: 'memory_game/jellyfish.jpg' },
        { src: 'memory_game/octopus.jpg' },
        { src: 'memory_game/star_fish.jpg' },
        { src: 'memory_game/whale.jpg' },
    ]

    useEffect(() => {
        shuffleCards()
    }, []);

    function shuffleCards() {
        const allCards = [...images, ...images]
            .sort(() => Math.random() - 0.5);

        setCards(allCards)

    }
    return (
        <div className='gameWrapper'>
            <h2>Memory Game</h2>
            <p>Moves: { }</p>
            <div className='cards'>
                {cards.map((card, i) => (
                    <div className='card' key={i}>
                        <img className='front' src={card.src}></img>
                        <img className='back' src='memory_game/back.jpg'></img>
                    </div>
                ))}
            </div>
        </div>)
}