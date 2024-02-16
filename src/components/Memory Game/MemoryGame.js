import { useEffect, useState } from 'react';
import * as style from './MemoryGame.css'
import { SingleCard } from './SingleCard';

const images = [
    { src: 'memory_game/cancer.jpg' },
    { src: 'memory_game/turtle.jpg' },
    { src: 'memory_game/jellyfish.jpg' },
    { src: 'memory_game/octopus.jpg' },
    { src: 'memory_game/star_fish.jpg' },
    { src: 'memory_game/whale.jpg' },
]

export function MemoryGame() {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [firstCard, setFirstCard] = useState(null);
    const [secondCard, setSecondCard] = useState(null);
    const [disabled, setDisabled] = useState(false);


    useEffect(() => {
        shuffleCards()
    }, []);

    function shuffleCards() {
        const allCards = [...images, ...images]
            .sort(() => Math.random() - 0.5)
            .map((card, i) => ({
                ...card,
                id: i * Math.floor(Math.random() * 10000),
                matched: false,
            }));

        setCards(allCards);
        setTurns(0);
    }

    function handleCardChoice(card) {
        firstCard ? setSecondCard(card) : setFirstCard(card);
    }

    useEffect(() => {
        if (firstCard && secondCard) {
            setDisabled(true)
            if (firstCard.src === secondCard.src) {
                setCards(cards => cards.map(card => card.src === firstCard.src
                    ? { ...card, matched: true }
                    : card)
                );
                nextTurn();
            } else {
                setTimeout(() => nextTurn(), 1000);
            }
        }
    }, [firstCard, secondCard])

    function nextTurn() {
        setFirstCard(null);
        setSecondCard(null);
        setTurns(turns => ++turns)
        setDisabled(false)
    }

    return (
        <div className='gameWrapper'>
            <h2>Memory Game</h2>
            <p>Turns: {turns}</p>
            <div>
                <button onClick={shuffleCards}>New game</button>
            </div>
            <div className='cards'>
                {cards.map(card => (<SingleCard
                    key={card.id}
                    card={card}
                    handleCardChoice={handleCardChoice}
                    flipped={card === firstCard || card === secondCard || card.matched}
                    disabled={disabled}
                />))}
            </div>
        </div>)
}