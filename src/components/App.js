import React, {useEffect, useState } from "react";
import '../styles/App.css';

const App=() => {
    const[renderBall,setRenderBall]=useState(false);
    //const[posi,setposi]=useState(0);
    const[ballPosition,setBallPosition]=useState({left: 0,top: 0});
    
    const handleListener=(event)=>{
        switch(event.keyCode){
            case 39:
              setBallPosition({
                   left:ballPosition.left+5,
                   top:ballPosition.top,
               })
                 break;
            case 40:
                setBallPosition({
                     left:ballPosition.left,
                     top:ballPosition.top+5,
                 })
                   break;
            case 37:
                  setBallPosition({
                       left:ballPosition.left-5,
                       top:ballPosition.top,
                   })
                     break;
            case 38:
                    setBallPosition({
                         left:ballPosition.left,
                         top:ballPosition.top-5,
                     })
                       break;
        }
      };

      const buttonClickHandler=()=> {
        setRenderBall(true);
      }

      const renderBallOrButton=()=> {
		if (renderBall) {
		    return <div className="ball" style={{
                left : ballPosition.left+ "px",
                top : ballPosition.top+ "px",
                position : "absolute",
            }}>    
            </div>
		} 
        else {
		    return <button onClick={buttonClickHandler} >Click For One Ball</button>
		}
      }


    useEffect(()=>{
        document.addEventListener("keydown",handleListener);
        return ()=> {document.removeEventListener("keydown",handleListener);}
        },[ballPosition]);
  
    return <div className="playground">{renderBallOrButton()}</div>;
};


export default App;
