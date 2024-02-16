export function SingleCard({ card, handleCardChoice, flipped, disabled }) {
    function handleClick() {
        if (!disabled) {
            handleCardChoice(card)
        }
    }

    return (
        <div className={flipped ? 'card flipped' : 'card'} key={card.id}>
            <img
                className='front'
                src={card.src}
                alt={card.src}></img>
            <img
                className='back'
                onClick={handleClick}
                src='memory_game/back.jpg'
                alt="card-back"></img>
        </div>
    )
}