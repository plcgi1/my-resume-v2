import React, { Component } from 'react';
import {FaTimes} from 'react-icons/fa';
import  './index.scss';
import {Link} from 'react-router';

class CloseMe extends Component {
    render() {
        return (
            <div className="close-me">
                <Link to="/"><FaTimes /></Link>
            </div>
        );
    }
}

export default CloseMe;