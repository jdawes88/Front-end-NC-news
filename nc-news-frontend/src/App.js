import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import Topics from './components/Topics'
import Articles from './components/Articles'
import Comments from './components/Comments'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/' component={Home} />
          <Route path='/topics' component={Topics} />
          <Route path='/articles' component={Articles} />
          <Route path='/comments' component={Comments} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
