import React from "react";
import './style.css';
export function MyCoolButton  (props) {
    const clickHandler = () => alert(`Today : ${new Date()}`);
  return (
  <div>
     <span>{props.buttonName ? props.buttonName : 'Default ЛАГ Товч'}</span><br/>
     <span>{`Today: ${new Date ()}`}</span><br/>
     <input 
     className = "myCoolButton" 
     type = "button" 
     onClick = {clickHandler} 
     value = {props.buttonText ? props.buttonText : 'Click me'}/>
    </div>
    );
  };