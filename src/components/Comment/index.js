import React, { Component } from "react";
import {MyCoolButton} from '../MyCoolButton';
import './style.css';
export class Comment extends Component{
    constructor(props){
        super(props);
        this.state = {
            publisher: "",
            comment: ""
        }

        console.log("====> constructor");
    }

    static getDerivedStateFromProps(prop,state){
        console.log("====> getDerivedStateFromProps");
        return true; 
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("====> shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("====> getSnapshotBeforeUpdate");
        return true;
    }
    write = (e) => {
        this.setState({comment : e.target.value});
    }
    render(){
        console.log("====> render");
        return <div className="comment">
               <div>{this.state.comment}</div><br/>
               <div>Зохиогч:{this.props.author}</div><br/>
               <textarea onChange={this.write}></textarea><br/>
               <MyCoolButton comment={this.state.comment} buttonName="Write comment..." buttonText = "Хадгал"/>
               <MyCoolButton comment={this.state.comment} buttonName="Write comment..." buttonText = "Намайг дар"/>
               </div>; 
    }

    componentDidMount(){
        console.log("====> componentDidMount");
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("====> componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("====> componentWillUnmount");
    }

}
