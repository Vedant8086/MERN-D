import GameLogo from "../../public/game-logo.png";

export default function Header() {
    return (
        <header>
            <img src={GameLogo} alt="Tic Tac Toe Logo" />
            <h1>Tic Tac Toe</h1>
        </header>
    )
}