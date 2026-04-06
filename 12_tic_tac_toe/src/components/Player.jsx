import { useState } from "react"
export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setEditing] = useState(false)
    function handleClickEvent() {
        setEditing(isEditing => !isEditing);
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }
    function handleNameChange(e) {
        setPlayerName(e.target.value);
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleNameChange} />
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClickEvent}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}