import logo from './logo.svg';
import './index.css';
import React, { useState, useEffect } from 'react';
import src_notify from './src_notify.mp3';
import ColorButton from './ColorButton';
import paletteData from './pallete.json';

class App extends React.Component {
  handleButtonClick = (color) => {
    navigator.clipboard.writeText(color);
    const audio = new Audio(src_notify);
    audio.play();
  };

  render() {
    const colors = paletteData[0].colors;

    return (
      <div className="app">
        <header className="header">
          <h1>Flat UI colors</h1>
        </header>

        <main className="main">
          <div className="color-buttons">
            {colors.map((color, index) => (
              <ColorButton key={index} color={color.color} onButtonClick={this.handleButtonClick} />
            ))}
          </div>
        </main>

        <footer className="footer">
          <p>Shanaev A. Young creator who like programing and play in D&D with "reality" friend</p>
        </footer>
      </div>
    );
  }
}

export default App;