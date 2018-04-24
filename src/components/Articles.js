import React, { Component } from 'react';

class Articles extends Component {
    render () {
        return (
            <div className="articles">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2 vote">
                        Vote arrows
                        </div>
                        <div className="col-sm-10 title">
                        Article title
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 data">
                        Article data
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Articles;