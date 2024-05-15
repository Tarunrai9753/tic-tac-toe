import React from "react";
import "./tictactoe.css";
import Usetictactoe from "./usetictactoe";

const Tictactoe = () => {
  const { board, handleClick, getStatus, resetGame } =
    Usetictactoe();
  console.log(board);

  return (
  <>
  <h1 className="text-center">Tic Tac Toe</h1>
    <div className="game">
      <div className="status gap-2 w-100">
        <h3>
        {getStatus()}
        </h3>
     
      </div>

      <div className="board">
        {board.map((item, index) => {
          return (
            <button
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
              disabled={item !== null}
            >
              { item}
            </button>
          );
        })}
      </div>
      <div className="mt-3">
      <button className="btn btn-dark " onClick={resetGame}>Reset Game</button>
      </div>
    </div>
    </>
  );
};

export default Tictactoe;
