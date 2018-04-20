import React, { Component } from 'react';
import SingleArticle from './SingleArticle'
import './ArticlesList.css';
import {Link, Route} from 'react-router-dom';

class ArticlesInfo extends Component {
    state = {
        article: this.props.article
    }
    render () {
        const {article, index, articles} = this.props
        return (
            <div className="container">
                <div className="row">
                    <div className="col rank">
                    {`${index}.`}
                    </div>
                    <div className="col vote">
                    {`Up ${article.votes} down`}
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
                            <li className="list-inline-item">   {`${article.comments} comments`}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

export default ArticlesInfo;