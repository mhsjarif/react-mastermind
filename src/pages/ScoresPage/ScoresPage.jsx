import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './ScoresPage.css';

class ScoresPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scores: []
        }
    }
    render() {
        return (
            <div>
                <h2>
                    this is the ScoresPage
                </h2>
            </div>
        )
    }
}

export default ScoresPage;