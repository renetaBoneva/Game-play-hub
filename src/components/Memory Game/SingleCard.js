export function SingleCard({ card, handleCardChoice }) {
    function handleClick(){
        handleCardChoice(card)
    }

    return (
    <div className='card' key={card.id}>
        <img className='front' src={card.src}></img>
        <img className='back' onClick={handleClick} src='memory_game/back.jpg'></img>
    </div>
    )
}