import React from 'react';
import './index.scss';

class MySpin extends React.Component {
    render() {
        return <div id="my-spin">
        <div className="loading">
            <div className="finger finger-1">
                <div className="finger-item">
                    <span></span><i></i>
                </div>
            </div>
            <div className="finger finger-2">
                <div className="finger-item">
                    <span></span><i></i>
                </div>
            </div>
            <div className="finger finger-3">
                <div className="finger-item">
                    <span></span><i></i>
                </div>
            </div>
            <div className="finger finger-4">
                <div className="finger-item">
                    <span></span><i></i>
                </div>
            </div>
            <div className="last-finger">
                <div className="last-finger-item"><i></i></div>
            </div>
        </div>
        </div>
    }
}

export default MySpin;

