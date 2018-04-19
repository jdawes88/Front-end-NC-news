import React, { Component } from 'react';
import './ArticlesList.css';

class ArticlesList extends Component {
    render () {
        const {articles} = this.props
        return (
            <div className="articlesList">
                {articles.map((article, i) => {
                    if (i < 10) {
                        return <ArticlesInfo 
                        article={article}
                        index={i+1}
                        key={`${article.title}${i}`}/>
                    }
                })}
            </div>
         )}
    }

class ArticlesInfo extends Component {
    
    render () {
        const {article, index} = this.props
        return (
            <div className="container">
                <div className="row">
                    <div className="col rank">
                    {`${index}.`}
                    </div>
                    <div className="col vote">
                    Vote arrows
                    </div>
                    <div className="col-sm-8 title">
                    {article.title}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 data">
                        <ul className="list-inline">
                            <li     className="list-inline-item">Author</   li>
                            <li     className="list-inline-item">Publish    time</li>
                            <li className="list-inline-item">   {article.comments}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArticlesList;