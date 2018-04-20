import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import Topics from './components/Topics'
import Comments from './components/Comments'
import SingleArticle from './components/SingleArticle'
import Header from './components/Header'
import Articles from './components/Articles'
import TopicArticles from './components/TopicArticles'
import axios from 'axios'
import './App.css';

class App extends Component {

  state = {
    articles: [],
    users:[],
    currentUser: {}
  }

  componentDidMount () {
    axios.all([
      axios.get('https://nc-news-project-jd.herokuapp.com/api/articles'),
      axios.get('https://nc-news-project-jd.herokuapp.com/api/users')])
    .then(([articles, users]) => {
        this.setState({
            articles: articles.data.articles,
            users: users.data.users
        })
    })
  }
  

  render() {
    const {articles, users, currentUser} = this.state
    return (
      <BrowserRouter>
        <div className="App">
          <Header 
          users={users}
          selectCurrentUser={this.selectCurrentUser}
          />
          <Route exact path='/' render={(props) => (
            <Home {...props} 
            articles={articles}
            handleVoteChange={this.handleVoteChange}/>
          )} />
          <Route path='/topics' render={(props) => (
            <Topics {...props} articles={articles}/>
          )} />
          <Route path='/topics/:topic/articles' render={(props) => (
            <TopicArticles {...props} handleVoteChange={this.handleVoteChange} />
          )} />
          <Route exact path="/articles" render={(props) =>(
            <Articles {...props} articles={articles} />
          )} />
          <Route path='/comments' component={Comments} />
          <Route path="/articles/:article_id" render={(props)=> (
                    <SingleArticle {...props} 
                    articles={articles}
                    handleVoteChange={this.handleVoteChange}
                    currentUser={currentUser}/>
                )} />
        </div>
      </BrowserRouter>
    );
  }

  selectCurrentUser = (userId) => {
    const {users}= this.state;
    const newUser = users.find(user => {
      if(user._id === userId){
        return user;
      }
    })
    this.setState({
      currentUser: newUser
    })
  } 

  handleVoteChange = (path, id, query) => {
    const {articles} = this.state
    axios.put(`https://nc-news-project-jd.herokuapp.com/api/${path}/${id}?vote=${query}`)
    .then(newArticle => {
        let articleUpdate = articles.map(article => {
          if(newArticle.data.article._id !== article._id) return article;
          return {...article, votes: newArticle.data.article.votes}
        })
        this.setState({
          articles: articleUpdate
        })
    })
  }


}


export default App;
