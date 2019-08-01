import React from 'react';
import {FaCheck} from 'react-icons/fa';

class DataView extends React.Component {
    render() {
        const {data} = this.props;
        
        const getTitle = ((props) => {
            if (props.url)
              return <span>
                {props.title} <div><a href={props.url} target="_blank" rel="noopener noreferrer">{props.url}</a>
              </div></span>
          
          return <span>{props.title}</span>;
        });
        
        return <div>
            <ul className="list">
            {data.map((item, i) => {
              return <li key={i}><p><FaCheck style={{ marginRight: '12px' }} />{getTitle(item)}</p></li>
            })}
            </ul>
        </div>
    }
}

export default DataView;