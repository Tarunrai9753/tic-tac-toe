import { useState } from "react";

const initboard = () => Array(9).fill(null);
const Usetictactoe = () => {
  const [board, setBoard] = useState(initboard());
  const [isXNext, setisXNext] = useState(true);
  const Winningpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculatewin = (cb) => {
    for (let i = 0; i < Winningpattern.length; i++) {
      const [a, b, c] = Winningpattern[i];
      if (cb[a] && cb[a] === cb[b] && cb[a] === cb[c]) {
        return cb[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    const winner = calculatewin(board);
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setisXNext(!isXNext);
  };
  const getStatus = () => {
const Winner=calculatewin(board);
if (Winner){
    return `Player ${Winner} Wins`;

}
if(!board.includes(null)){
    return `Draw`;
}
return `Next Player: ${isXNext ? "X" : "O"} Turn `;
  };
  const resetGame = () => {
    setBoard(initboard());
    setisXNext(true);
  };

  return {
    board,
    handleClick,
    calculatewin,
    getStatus,
    resetGame,
  };
};
export default Usetictactoe;
