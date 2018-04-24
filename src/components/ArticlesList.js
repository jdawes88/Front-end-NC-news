import React, { Component } from 'react';
import ArticlesInfo from './ArticlesInfo'
import './ArticlesList.css';

class ArticlesList extends Component {



    render () {
        const {articles, handleVoteChange} = this.props
        let sortedArticles = articles.sort(function(a,b){
            return  b.votes - a.votes
        })
        return (
            <div className="articlesList">
                {sortedArticles.map((article, i) => {
                        if(!article) return <div></div>
                        return <ArticlesInfo
                        handleVoteChange={handleVoteChange} 
                        article={article}
                        index={i+1}
                        key={`${article.title}${i}`}/>
                })}
            </div>
         )}
    }



export default ArticlesList;