import React, { Component } from "react";
import "./style.css";
export class Conversation extends Component{

    constructor(){
        super();
        this.state = {
            conversation: "",
            count: ""
        }
    }

    writeSomething = (e) =>{
        var count = e.target.value.length;
        this.setState({conversation: e.target.value,count:count});
      }
    render(){
        return <div>
            <input className="conversation" onChange={this.writeSomething} type="text"/><br/>
            <input className="conversation" value={this.state.count} type="text" readOnly />
        </div>;
    }
}