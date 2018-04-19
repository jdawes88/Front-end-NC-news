import React, { Component } from 'react';
import Header from './Header'
import ArticlesList from './ArticlesList'

class Home extends Component {
    render () {
        const {articles} = this.props
        return (
            <div className="homepage">
                <ArticlesList articles={articles}/>
            </div>
        )
    }
}

export default Home;