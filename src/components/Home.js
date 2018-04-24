import React, { Component } from 'react';
import ArticlesList from './ArticlesList'

class Home extends Component {
      
    render () {
        const {articles, handleVoteChange} = this.props
        return (
            <div className="homepage">
                <ArticlesList 
                articles={articles}
                handleVoteChange={handleVoteChange}
                />
            </div>
        )
    }
}

export default Home;