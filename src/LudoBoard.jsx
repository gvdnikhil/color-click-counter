import { useState } from 'react'

function LudoBoard() {


    const [redcount,redcountstate] = useState(0);
  
    function redclick()
    {
      redcountstate(redcount+1);
      console.log("red++ count " , redcount);
    }
  
    const [bluecount,bluecountstate] = useState(0);
  
    function blueclick()
    {
      bluecountstate(bluecount+1);
      console.log("blue++ count " , bluecount);
    }
  
    // function redclick()
    // {
    //   redcountstate(redcount+1);
    //   console.log("red++ count " , redcount);
    // }
  
    // function redclick()
    // {
    //   redcountstate(redcount+1);
    //   console.log("red++ count " , redcount);
    // }
  
  
  
  
  
    return (
  
      <>
      <h1>Ludo Game</h1>
        <p>Blue Moves: {bluecount} </p>
        <button onClick={blueclick} style={{backgroundColor :"blue"}}>+1</button>
        <p>Yellow Moves:  </p>
        <button  style={{backgroundColor :"yellow"}}>+1</button>
        <p>Red Moves: {redcount}  </p>
        <button onClick={redclick} style={{backgroundColor :"red"}}>+1</button>
        <p>Green Moves:  </p>
        <button style={{backgroundColor :"green"}}>+1</button>
  
  
  
      </>
      
     
          
    )
  }
  
  export default LudoBoard