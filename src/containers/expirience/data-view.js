import React from 'react';
import {FaCheck} from 'react-icons/fa';

class DataView extends React.Component {
    render() {
        const {data} = this.props;
        
        const getTitle = ((props) => {
            if (props.url)
              return <span>
                {props.title} <div><a style={{float:'right'}} href={props.url} target="_blank" rel="noopener noreferrer">{props.url}</a>
              </div></span>
          
          return <span>{props.title}</span>;
        });
        
        return <div>
            <ul className="list">
            {data.map((item, i) => {
                return <li key={i}><FaCheck style={{marginRight: '7px'}}/>{getTitle(item)}</li>
            })}
            </ul>
        </div>
    }
}

export default DataView;