import React from 'react';
import ReactTooltip from 'react-tooltip';

class ImageView extends React.Component {
    render() {
        const {data, label} = this.props;
        
        if(!data) return null;
        
        return <div className="small-icons">
            <h4>{label}</h4>
            {data.map((row, i) =>
                <span key={i}>
                <img src={row.image} alt={row.title} data-tip data-for={row.title}/>
                <ReactTooltip id={row.title} effect="solid">
                    <span>{row.title}</span>
                </ReactTooltip>
                </span>
            )}
        </div>
    }
}

export default ImageView;