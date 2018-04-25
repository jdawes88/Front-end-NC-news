import React, { Component } from 'react';
import './ArticlesList.css';
import {Link} from 'react-router-dom';

class ArticlesInfo extends Component {
    render () {
        const {article, index, handleVoteChange} = this.props
        return (
            <div className="card">
            <div className="card-header bg-danger d-flex flex-row">
            <div className="p-2 rank">{`${index}.`}</div>
            <div className="p-2 d-flex flex-row voteToggle">
            <button onClick={() => {
                    handleVoteChange('articles', article._id, 'up')
                }}>
                <i className="fas fa-arrow-up"></i>
            </button>
            {article.votes} 
            <button onClick={() => {    
                    handleVoteChange('articles', article._id, 'down')
                }}>
                <i className="fas fa-arrow-down"></i>
            </button>
            </div>
            <div className="p-2 articleTitle">
            <Link className="link" to={`/articles/${article._id}`}>
                {article.title}
            </Link>
            </div>
            </div>
            <div className="card-footer">
            <div className="articleInfo d-flex justify-content-around">
            <div className="p-2"></div>
            <div className="p-2"></div>
            <div className="p-2 article-info">
            <span className="author">
            {`Author: ${article.created_by.name}`}
            </span>
            {article.comments && <span className="commentCount">{`${article.comments} comments`}</span>}
            </div>
            </div>
            </div>
            </div>
        )
    }

}

export default ArticlesInfo;