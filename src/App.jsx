import logo from './logo.svg';
import './App.css';
import DarkMode from './component/darkMode/DarkMode'
import Header from './component/header/Header'

function App() {
  return (
    <div className="app">
      <Header />
      {/* <header className="App-header">
        <DarkMode />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App
