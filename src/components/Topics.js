import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

class Topics extends Component {

    state= {
        topics: [],
    }

    componentDidMount () {
        axios.get('https://nc-news-project-jd.herokuapp.com/api/topics')
        .then((topics) => {
            this.setState({
                topics: topics.data.topics
            })
        })
    }

    render () {
        const {topics} = this.state;
        return (
            <div className="topics">
                <ul className="list-inline">
                    {topics.map(topic => {
                        return (
                            <Link className="link" to={`/topics/${topic._id}/articles`}
                            key={topic._id}> <li value={topic._id} 
                            className="list-inline-item"
                            >
                            <h3>{topic.title}</h3>
                            </li> </Link>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Topics;