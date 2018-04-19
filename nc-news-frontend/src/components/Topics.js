import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'

class Topics extends Component {
    render () {
        return (
            <div className="topics">
                <ul className="list-inline">
                    <li className="list-inline-item">Coding</li>
                    <li className="list-inline-item">Football</li>
                    <li className="list-inline-item">Cooking</li>
                </ul>
            </div>
        )
    }

    createTopicsList (topic) {

    }

}

export default Topics;