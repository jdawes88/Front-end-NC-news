import React, { Component } from 'react';
import Header from './Header'
import ArticlesList from './ArticlesList'

class Home extends Component {
    render () {
        return (
            <div className="homepage">
                <Header />
                <ArticlesList />
            </div>
        )
    }
}

export default Home;