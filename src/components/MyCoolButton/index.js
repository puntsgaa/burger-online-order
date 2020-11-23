import React,{ useState } from "react";
import './style.css';
export function MyCoolButton  (props) {
    const [commentHistory,setcommentHistory] = useState([]);  
    const [count,setCount] = useState(0);
    const clickHandler = () => {
      setCount(count + 1);
      setcommentHistory(commentHistory.concat(props.comment));
      //alert(props.comment);
    }
  return (
  <div className="coolButton">
     <span style={css}>{props.buttonName ? props.buttonName : 'Default ЛАГ Товч'}</span><br/>
     <input 
     className = "myCoolButton" 
     type = "button" 
     onClick = {clickHandler} 
     value = {props.buttonText ? count + ') ' + props.buttonText : 'Click me'}/>
     <div>
  {commentHistory.map((el,index) => <div key={index}>{el} - {index}</div>)}
     </div>
    </div>
    );
  };
  const css = {
    backgroundColor : "gray",
    color : "blue"
  };