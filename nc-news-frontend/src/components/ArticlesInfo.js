import React, { Component } from 'react';
import './ArticlesList.css';
import {Link} from 'react-router-dom';

class ArticlesInfo extends Component {
    render () {
        const {article, index, handleVoteChange} = this.props
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-1 rank">
                    {`${index}.`}
                    </div>
                    <div className="col-sm-3 vote">
                    <div className="container">
                    <div className="row">
                    <div className="col-sm-4">
                    <button onClick={() => {
                        handleVoteChange('articles', article._id, 'up')
                    }}>
                    <i className="fas fa-arrow-up"></i>
                    </button>
                    </div>
                    <div className="col-sm-4">
                    {article.votes}
                    </div>
                    <div className="col-sm-4">
                    <button onClick={() => {
                        console.log(article._id)
                        handleVoteChange('articles', article._id, 'down')
                    }}>
                    <i className="fas fa-arrow-down"></i>
                    </button>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-sm-8 title">
                    <Link to={`/articles/${article._id}`}>
                    {article.title}
                    </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 data">
                        <ul className="list-inline">
                            <li className="list-inline-item">{`Author: ${article.created_by.name}`}</   li>
                            {article.comments && <li className="list-inline-item">   {`${article.comments} comments`}</li>}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

export default ArticlesInfo;