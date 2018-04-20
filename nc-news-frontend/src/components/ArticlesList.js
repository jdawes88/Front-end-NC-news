import React, { Component } from 'react';
import SingleArticle from './SingleArticle'
import ArticlesInfo from './ArticlesInfo'
import './ArticlesList.css';
import {Link, Route} from 'react-router-dom';

class ArticlesList extends Component {
    render () {
        const {articles} = this.props
        let sortedArticles = articles.sort(function(a,b){
            return  b.votes - a.votes
        })
        return (
            <div className="articlesList">
                {sortedArticles.map((article, i) => {
                        return <ArticlesInfo
                        articles={articles} 
                        article={article}
                        index={i+1}
                        key={`${article.title}${i}`}/>
                })}
            </div>
         )}
    }



export default ArticlesList;