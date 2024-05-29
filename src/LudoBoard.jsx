import { useState } from "react";

function LudoBoard() {
  const [moves, movestate] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });

  const updateblue = () => {
   
    movestate((prevmoves) => {
        return ({...prevmoves ,blue: prevmoves.blue+1 });
    });

    console.log(moves.blue);
  };

  const updateyellow = () => {
   
    movestate((prevmoves) => {
        return ({...prevmoves ,yellow: prevmoves.yellow+1 });
    });

    console.log(moves.yellow);
  };

  const updategreen = () => {
   
    movestate((prevmoves) => {
        return ({...prevmoves ,green: prevmoves.green+1 });
    });

    console.log(moves.green);
  };

  const updatered = () => {
   
    movestate((prevmoves) => {
        return ({...prevmoves ,red: prevmoves.red+1 });
    });

    console.log(moves.red);
  };

  return (
    <>
      <h1>Ludo Game</h1>
      <p>Blue Moves: {moves.blue} </p>
      <button onClick={updateblue} style={{ backgroundColor: "blue" }}>
        +1
      </button>

      <p>Yellow Moves: {moves.yellow} </p>
      <button  onClick={updateyellow} style={{ backgroundColor: "yellow" }}>+1</button>

      <p>Red Moves: {moves.red} </p>
      <button onClick={updatered} style={{ backgroundColor: "red" }}>
        +1
      </button>

      <p>Green Moves: {moves.green} </p>
      <button onClick={updategreen} style={{ backgroundColor: "green" }}>+1</button>
    </>
  );
}

export default LudoBoard;
