import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faUserGroup } from '@fortawesome/free-solid-svg-icons';

import './TicTakToe.css'
import { TicTacToeAIOpponent } from './TicTacToeAIOpponent/TicTacToeAIOpponent';

export function TicTacToeGame() {
    const [isAI, setIsAI] = useState(false);
    const [isFriend, setIsFriend] = useState(false);

    function onAIChose() {
        setIsAI(true);
    }

    function onFriendChose() {
        setIsFriend(true);
    }

    if (isAI) {
        return <TicTacToeAIOpponent />
    } else if (isFriend) {
        return <></>
    } else {
        return (
            <section className='chooseOpponentWrapper'>
                <button className='opponentButton' onClick={onAIChose}>
                    <FontAwesomeIcon className={'ticTacToeSVG'} icon={faRobot} />
                    Play with AI
                </button>
                <button className='opponentButton' onClick={onFriendChose}>
                    <FontAwesomeIcon className={'ticTacToeSVG'} icon={faUserGroup} />
                    Play with your friend
                </button>
            </section>
        )
    }
}

