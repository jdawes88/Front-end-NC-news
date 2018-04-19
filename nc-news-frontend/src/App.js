import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import Topics from './components/Topics'
import Articles from './components/Articles'
import Comments from './components/Comments'
import Header from './components/Header'
import axios from 'axios'
import './App.css';

class App extends Component {

  state = {
    articles: []
  }

  componentDidMount () {
    axios.get('https://nc-news-project-jd.herokuapp.com/api/articles')
    .then(({data}) => {
        this.setState({
            articles: data.articles
        })
    })
}

  render() {
    const {articles} = this.state
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path='/' render={(props) => (
            <Home {...props} articles={articles}/>
          )} />
          <Route path='/topics' render={(props) => (
            <Topics {...props} articles={articles}/>
          )} />
          <Route path='/articles' render={(props) => (
            <Articles {...props} articles={articles}/>
          )} />
          <Route path='/comments' component={Comments} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
