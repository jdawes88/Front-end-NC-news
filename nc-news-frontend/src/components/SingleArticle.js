import React, {Component} from 'react';
import Comments from './Comments'
import axios from 'axios';
import './SingleArticle.css'


class SingleArticle extends Component {
    state = {
        selectedArticle: {},
        comments: [],
        newComment: '',
        
    }

    componentDidMount () {
        const articleId = this.props.match.params.article_id;
        this.getArticleComments(articleId)
        this.getSelectedArticle(articleId)
    }


    render () {
        const {currentUser} = this.props
        const {selectedArticle, comments} = this.state
        if(!selectedArticle.body) return <div></div>
        return (
            <div>
                <h3>{selectedArticle.title}</h3>
                <p>By {selectedArticle.created_by.name}</p>
                <p>{selectedArticle.body}</p>
                <form className="commentForm" onSubmit={this.handleCommentSubmit} >
                    <label htmlFor="commentInput">New comment</label>
                    <input value={this.state.newComment} onChange={this.handleCommentChange} type="text" className="form-control"  placeholder="Please enter your comment here." required />
                    <button type="submit" className="btnbtn-primary">Submit</button>
                </form>
                <Comments 
                deleteComment={this.deleteComment}
                currentUser={currentUser}
                comments={comments} 
                handleCommentVoteChange={this.handleCommentVoteChange}
                />
            </div>
        )
    }

    handleCommentChange = (event) => {
        let comment = event.target.value;
        this.setState({
            newComment: comment
        })
    }

    handleCommentSubmit = (event) => {
        event.preventDefault()
        const {newComment} = this.state
        this.addComment(newComment)
    }

    addComment = (comment) => {
        const {comments} = this.state
        const {currentUser} = this.props
        const articleId = this.props.match.params.article_id;
        axios.post(`https://nc-news-project-jd.herokuapp.com/api/articles/${articleId}/comments`, {
            body: comment,
            belongs_to: articleId,
            created_by: currentUser._id
        })
        .then(comment => {
            this.setState({
                newComment: '',
                comments: [...comments, comment.data.comment]
            })
        })
    }

    getArticleComments = (article_id) => {
        const articleId = this.props.match.params.article_id;
        axios.get(`https://nc-news-project-jd.herokuapp.com/api/articles/${articleId}/comments`)
        .then((comments) => {
            this.setState({
                comments: comments.data.comments
            })
        })
    }

    getSelectedArticle = (article_id) => {
        const articleId = this.props.match.params.article_id;
        axios.get(`https://nc-news-project-jd.herokuapp.com/api/articles/${articleId}`)
        .then((selectedArticle) => {
            this.setState({
                selectedArticle: selectedArticle.data.user,
            })
        })
    }

    handleCommentVoteChange = (path, id, query) => {
        const {comments} = this.state
        axios.put(`https://nc-news-project-jd.herokuapp.com/api/${path}/${id}?vote=${query}`)
        .then(newComment => {
            let commentUpdate = comments.map(comment => {
              if(newComment.data.comment._id !== comment._id) return comment;
              return {...comment, votes: newComment.data.comment.votes}
            })
            this.setState({
              comments: commentUpdate
            })
        })
      }

      deleteComment = (id) => {
        const articleId = this.props.match.params.article_id;
        const {comments} = this.state;
        axios.delete(`https://nc-news-project-jd.herokuapp.com/api/comments/${id}`)
        .then(() => {
            let newComments = comments.filter(comment => {
                return comment._id !== id
            })
            return newComments
            console.log(this.state.comments)
            console.log(newComments)
        })
        .then(newComments => {
            this.setState({
                comments: newComments
            })
        })
    }


}

export default SingleArticle;