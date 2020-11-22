import React, { Component } from "react";
import {MyCoolButton} from '../MyCoolButton';
export class Comment extends Component{
    constructor(){
        super();
        this.state = {
            publisher: "",
            comment: ""
        }
    }
    write = (e) => {
        this.setState({comment : e.target.value});
    }
    render(){
        return <div>
               <div>{this.state.comment}</div><br/>
               <div>Зохиогч:{this.props.author}</div><br/>
               <textarea onChange={this.write}></textarea>
               <MyCoolButton comment={this.state.comment} buttonName="Write comment..." buttonText = "Хадгал"/>
               </div>; 
    }
}
