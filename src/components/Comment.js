import React, { Component } from 'react';
import axios from 'axios'
import './Comment.css'
const moment = require('moment')

class Comment extends Component {
    render () {
        const {comment, rank, handleCommentVoteChange, currentUser, deleteComment} = this.props
        if (!comment.created_by) return <div></div>
        return (
            <div className="card comment-box">
                <div className="card-header bg-danger d-flex flex-row">
                    <div className="p-2 rank">{`${rank}.`}</div>
                    <div className="p-2 d-flex flex-row voteToggle">
                    <button onClick={() => {
                        handleCommentVoteChange('comments', comment._id, 'up')
                    }}>
                    <i className="fas fa-arrow-up"></i>
                    </button>
                    {comment.votes}
                    <button onClick={() => {
                        handleCommentVoteChange('comments', comment._id, 'down')
                    }}>
                    <i className="fas fa-arrow-down"></i>
                    </button>
                    </div>
                    <div className="p-2 comment-info">
                    {`Author: ${comment.created_by.name}`} 
                    <br/>
                    {`Created ${moment(comment.created_at).fromNow()}`}
                    </div>
                    <div className="ml-auto p-2">
                    {currentUser._id === comment.created_by._id && 
                    
                    <button className="deleteButton" onClick={() => {
                        deleteComment(comment._id)
                    }}>
                    <i className="fas fa-trash"></i>
                    </button>
                    }
                    </div>
                </div>
                
                <div className="card-footer">
                    {comment.body}
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