import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state,setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [count,setCount] = useState(0);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a,b,c] = logic;
      if(state[a] != null && state[a] === state[b] && state[a] === state[c]) return true;
    }
    return false;
  };

  const isWinner = checkWinner();

  const checkDraw=()=>{
    if(count === 9 && !isWinner)
      return true;
    return false;
  };

  const isDraw = checkDraw();

  const handleClick=(index)=>{
    const copyState = [...state];
    if(copyState[index] === null){
      copyState[index] = isXTurn ? "X" : "O";
      setState(copyState);
      setIsXTurn(!isXTurn);
    }
    setCount(count+1);
  };

  const handleReset=()=>{
    setState(Array(9).fill(null));
    setIsXTurn(true);
    setCount(0);
  };

  return (
    <div className="board-container">
      <h2>
        TIC TAC TOE GAME
      </h2>
      
    { isWinner ?
      (<>
        <h1>Player { isXTurn ? 'O' : 'X' } Won</h1> <br />
        <button onClick={handleReset}>Play Again</button>
      </>)
      :
      (
      <>
        { isDraw ? 
          <>
            <h1>Draw</h1> <br />
            <button onClick={handleReset}>Play Again</button>
          </>
          :
          <>
            <h4>Player { isXTurn ? 'X' : 'O' }'s turn</h4>
            <div className="board-row">
              <Square onClick={()=>handleClick(0)} value={state[0]}/>
              <Square onClick={()=>handleClick(1)} value={state[1]}/>
              <Square onClick={()=>handleClick(2)} value={state[2]}/>
            </div>
            <div className="board-row">
              <Square onClick={()=>handleClick(3)} value={state[3]}/>
              <Square onClick={()=>handleClick(4)} value={state[4]}/>
              <Square onClick={()=>handleClick(5)} value={state[5]}/>
            </div>
            <div className="board-row">
              <Square onClick={()=>handleClick(6)} value={state[6]}/>
              <Square onClick={()=>handleClick(7)} value={state[7]}/>
              <Square onClick={()=>handleClick(8)} value={state[8]}/>
            </div>
          </>
        }
      </>
      )
    }
    </div>
  );
};

export default Board;