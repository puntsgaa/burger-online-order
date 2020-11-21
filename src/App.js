import logo from './logo.svg';
import './App.css';
import {MyCoolButton} from './components/MyCoolButton';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyCoolButton buttonName="Миний гое товч" buttonText = "Намайг дар"/>
        <MyCoolButton buttonName="Миний лайтай товч" buttonText = "Намайг дар pls"/>
        <MyCoolButton buttonName="Миний супер товч" buttonText = "Hello"/>
        <MyCoolButton/>
      </header>
    </div>
  );
}

export default App;
