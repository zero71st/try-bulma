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
import HorizontalForm from './Forms/HorizontalForm.react';
import Column from './Columns/Column.react';

class App extends Component {
  render() {
    return (
      <div>
        <Column/>
      </div>
    );
  }
}

export default App;
