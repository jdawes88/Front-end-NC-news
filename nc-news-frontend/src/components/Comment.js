import React, { Component } from 'react';
import axios from 'axios'
const moment = require('moment')

class Comment extends Component {
    render () {
        const {comment, rank, handleCommentVoteChange, currentUser, deleteComment} = this.props
        if (!comment.created_by) return <div></div>
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-1 rank">
                    {`${rank}.`}
                    </div>
                    <div className="col-sm-3 vote">
                    <div className="container">
                    <div className="row">
                    <div className="col-sm-4">
                    <button onClick={() => {
                        handleCommentVoteChange('comments', comment._id, 'up')
                    }}>
                    <i className="fas fa-arrow-up"></i>
                    </button>
                    </div>
                    <div className="col-sm-4">
                    {comment.votes}
                    </div>
                    <div className="col-sm-4">
                    <button onClick={() => {
                        handleCommentVoteChange('comments', comment._id, 'down')
                    }}>
                    <i className="fas fa-arrow-down"></i>
                    </button>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-sm-8 title card">
                    <div className="card-body">
                    {`Author: ${comment.created_by.name}`} 
                    <br/>
                    {`Created ${moment(comment.created_at).fromNow()}`}
                    {currentUser._id === comment.created_by._id && 
                    <button className="deleteButton" onClick={() => {
                        deleteComment(comment._id)
                    }}>
                    <i className="fas fa-eraser"></i>
                    </button>}
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 card">
                        <div className="card-body">
                        {comment.body}</div>
                    </div>
                </div>
            </div>
        )
    }

    deleteComment = (id) => {
        axios.delete(`https://nc-news-project-jd.herokuapp.com/comments/${id}`)
        .then()
    }
}

export default Comment;