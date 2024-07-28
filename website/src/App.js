// app.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Image from './components/image';
import Navbar from "./components/navbar";
import Login from "./components/login";
import './App.css';
import REACT_LOGO from './Assets/logo.svg';
import BOTTLE from './Assets/bottle.jpeg';
import BRICKS from './Assets/bricks.jpg';
import SQUARES from './Assets/8_squares.jpg';
import GREENLIGHT from './Assets/green_light.jpg';
import MICROSOFT from './Assets/microsoft.jpg';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Login/>

      <div className = "parent">
        <div className = "acts">
          <Image m={REACT_LOGO} event = "Jashan" />
          <Image m={BOTTLE} event = "Ricky"/>
          <Image m={BRICKS} event = "Jason"/>
          <Image m={SQUARES} event = "Vadant"/>
          <Image m={GREENLIGHT} event = "Enkai"/>
          <Image m={MICROSOFT} event = "Lol"/>
          <Image m={MICROSOFT} event = "Lol"/>
          <Image m={MICROSOFT} event = "Lol"/>
          <Image m={MICROSOFT} event = "Lol"/>
        </div>
        
        <div className = "recent">
          <Image m={REACT_LOGO} event = "Jashan" />
          <Image m={BOTTLE} event = "Ricky"/>
        </div>
      </div>

    </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

export default App;
