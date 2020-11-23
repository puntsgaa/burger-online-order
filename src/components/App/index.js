import logo from './logo.svg';
import './style.css';
//import {MyCoolButton} from '../MyCoolButton';
import {Comment} from '../Comment';
import {Conversation} from '../Conversation'; 
import { Component } from 'react';
class App extends Component{

    state = {
      showComment:true,
      symbol:"X"
    };
 
    hideComment = () => {
      var newSymbol = "";
      this.setState({showComment: !this.state.showComment})
      if(this.state.symbol === "X"){
         newSymbol = "+";
         this.setState({symbol: newSymbol})
      }
      else{
        newSymbol = "X";
        this.setState({symbol: newSymbol})
      }
    }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={this.hideComment}>{this.state.symbol}</button>
        <img src={logo} className="App-logo" alt="logo" />
        {this.state.showComment ? <Comment author = "Пунцаг"/> : null}
       <Conversation/>
      </header>
    </div>
  );
}
}

export default App;
