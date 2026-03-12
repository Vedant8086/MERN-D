import Player from "./Player.jsx"
import GameBoard from "./GameBoard.jsx";
import { useState } from "react";
export default function Dashboard() {
    const [activePlayer, setActivePlayer] = useState('X');

    function handleSelections() {
        setActivePlayer((currplayer) => currplayer === 'X' ? 'O' : 'X');
    }
    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName="Player-1" symbol="X" isActive={activePlayer === 'X'} />
                    <Player initialName="Player-2" symbol="O" isActive={activePlayer === 'O'} />
                </ol>
                <GameBoard onSelections={handleSelections} activePlayerSymbol={activePlayer} />
            </div>
        </main >
    )
}