import React, { Component } from 'react';
import 'bulma/css/bulma.css';
class App extends Component {
  render() {
    return (
      <div>
         <div className="section">
          <div className="container">
              <h1 className="title">Button</h1>
              <h1 className="subtitle">How to use button</h1>
              <a className='button is-primary'>button</a>
              <a className='button is-success'>button</a>
              <a className='button is-warning'>button</a>
              <a className='button is-danger'>button</a>
              <a className='button is-link'>button</a>
              <a className='button is-info'>button</a>
          </div>
         </div>
         <div className="section">
            <div className="container">
              <h1 className="subtitle">button2</h1>
              <a className='button is-primary'>button</a>
              <a className='button is-success'>button</a>
              <a className='button is-warning'>button</a>
              <a className='button is-danger'>button</a>
              <a className='button is-link'>button</a>
              <a className='button is-info'>button</a>
            </div>
         </div>
      </div>
    );
  }
}

export default App;
