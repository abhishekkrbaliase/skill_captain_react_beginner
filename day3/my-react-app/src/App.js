import logo from './logo.svg';
import './App.css';

import Clock from './clock';
import Footer from './Footer';
import Greeting from './Greeting';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Sure!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Greeting name="John" message="Let's learn React together!" />
      </header>
      <Footer />
      <Clock />
    </div>
    
  );
}

export default App;
