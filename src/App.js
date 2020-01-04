import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Preview from './components/Preview';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/home" component={Home} />
        <Route path="/preview" component={Preview} />
      </BrowserRouter>
    );
  }
}

export default App;
