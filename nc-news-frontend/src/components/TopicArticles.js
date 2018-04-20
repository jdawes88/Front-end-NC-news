import React, {Component} from 'react'
import axios from 'axios'
import ArticlesInfo from './ArticlesInfo';

class TopicArticles extends Component {

    state = {
        topicArticles: []
    }

    componentDidMount() {
        const topicId = this.props.match.params.topic
        this.getTopicArticles(topicId)
    }

    componentWillReceiveProps(nextProps) {
        const topicId = nextProps.match.params.topic
        this.getTopicArticles(topicId)
    }

    
    render () {
        const {topicArticles} = this.state;
        const {handleVoteChange} = this.props;
        let sortedArticles = topicArticles.sort(function(a,b){
            return  b.votes - a.votes
        })
        return (
            <div className="articlesList">
                {sortedArticles.map((article, i) => {
                    return (
                        <ArticlesInfo
                        handleVoteChange ={handleVoteChange}
                        article={article}
                        index={i+1}
                        key={`${article._id}${i}`}
                         />
                )
                })}
            </div>
        )
    }

    getTopicArticles = (topicId) => {
        axios.get(`https://nc-news-project-jd.herokuapp.com/api/topics/${topicId}/articles`)
        .then((articles) => {
            this.setState({
                topicArticles: articles.data.articles
            })
        })
    }
}

export default TopicArticles