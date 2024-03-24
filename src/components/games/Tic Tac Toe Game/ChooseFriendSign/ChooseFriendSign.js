import { useState } from 'react';
import { TicTacToeFriendOpponent } from '../TicTacToeFriendOpponent/TicTacToeFriendOpponent';
import { useAuthContext } from '../../../../hooks/useAuthContext';


export function ChooseFriendSign() {
    const [sign, setSign] = useState('');
    const { username } = useAuthContext();

    function onXChose() {
        setSign('X');
    }

    function onOChose() {
        setSign('O');
    }

    if (sign && (sign === 'O' || sign === 'X')) {
        return <TicTacToeFriendOpponent inputSign={sign}/>
    } else {
        return (
            <section className='chooseSignWrapper'>
                <h2>Choose {username ? username : 'Player 1'}'s sign</h2>
                <div className='signButtonsWrapper'>
                    <button className='signButton' onClick={onXChose}>
                        X
                    </button>
                    <button className='signButton' onClick={onOChose}>
                        O
                    </button>
                </div>
            </section>
        )
    }
}

