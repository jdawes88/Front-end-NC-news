import React, { Component } from 'react';
import Comment from './Comment'

class Comments extends Component {

    render () {
        const {comments, handleCommentVoteChange, currentUser, deleteComment} = this.props
        let sortedComments = comments.sort(function(a,b){
            return b.votes - a.votes
        })
        return (
            <div className="commentsList">
                {sortedComments.map((comment, i) => {
                    return <Comment 
                    deleteComment={deleteComment}
                    currentUser={currentUser}
                    handleCommentVoteChange={handleCommentVoteChange}
                    comment={comment}
                    rank={i+1}
                    key={`${comment._id}${i}`}/>
                })}
            </div>
        )
    }
}

export default Comments;