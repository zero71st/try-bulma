import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import Button from './components/Button.react';
import Box from './components/Box.react';
import Level from './Layouts/Level.react';
import Hero from './Layouts/Hero.react';
import Container from './Layouts/Container.react';
import Section from './Layouts/Section.react';
import General from './Forms/General.react';

class App extends Component {
  render() {
    return (
      <div>
        {/* <section className="section">
          <section className="container">
            <h1 className="title">Layouts</h1>
            <h2>This is container for defind layout</h2>
            <nav className="nav">
              <a href="/Contianer">Container</a>
              <a href="/Level">Lavel</a>
              <a href="/Media Object">Media Object</a>
            </nav>
          </section>
        </section>
        <section className="section">
          <section className="container">
            <h1 className="title">Columns</h1>
            <h2>This is container for defind layout</h2>
          </section>
        </section> */}
        <General/>
      </div>
    );
  }
}

export default App;
