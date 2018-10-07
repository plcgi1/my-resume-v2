import React from 'react';
import { Link } from 'react-router';
import { Card } from 'antd';
import './style.css';

class NotFound extends React.Component {
    render() {
        return <div>
            <Card className="not-found">
                <center><Link to="/">Return to Home Page</Link></center>
            </Card>
        </div>
    }
}

export default NotFound;