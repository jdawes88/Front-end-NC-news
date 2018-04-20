import React, {Component} from 'react';
import axios from 'axios';
import './SingleArticle.css'


class SingleArticle extends Component {
    state = {
        selectedArticle: {},
        newComment: '',
        
    }

    componentDidMount () {
        const articleId = this.props.match.params.article_id;
        axios.get(`https://nc-news-project-jd.herokuapp.com/api/articles/${articleId}`)
        .then(({data}) => {
            this.setState({
                selectedArticle: data.user
            })
        })
        // const {articles} = this.props
        // const articleId = this.props.match.params.article_id;
        // const selectedArticle = articles.find((article, i)=> {
        //     if(article._id === articleId) {
        //         return article
        //     } else {
        //         return null
        //     }
        // })
        // this.setState({
        //     selectedArticle: selectedArticle
        // })
    }
    render () {
        const {selectedArticle} = this.state
        if(!selectedArticle.body) return <div></div>
        return (
            <div>
            
                <h3>{selectedArticle.title}</h3>
                <p>By {selectedArticle.created_by.name}</p>
                <p>{selectedArticle.body}</p>
                <form className="commentForm" onSubmit={this.handleSubmit} >
                    <label htmlFor="commentInput">New comment</label>
                    <input value={this.state.newComment} onChange={this.props.handleGitChange} type="text" className="form-control"  placeholder="Please enter your comment here." required />
                    <button type="submit" className="btnbtn-primary">Submit</button>
                </form>
            </div>
        )
    }

}

export default SingleArticle;