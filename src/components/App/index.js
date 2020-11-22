import logo from './logo.svg';
import './style.css';
//import {MyCoolButton} from '../MyCoolButton';
import {Comment} from '../Comment';
import {Conversation} from '../Conversation'; 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Comment author = "Пунцаг"/>
        <Conversation/>
      </header>
    </div>
  );
}

export default App;
