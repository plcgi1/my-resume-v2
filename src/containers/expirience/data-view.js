import React from 'react';
import {FaCheck} from 'react-icons/fa';
import ImageView from './image-view';
import Divider from 'antd/lib/divider';
import 'antd/lib/divider/style/index.css'

class DataView extends React.Component {
    render() {
        const {data} = this.props;
        
        const getTitle = ((props) => {
            if (props.url)
              return <span>
                {props.title}
                {
                  props.url &&
                  <div className="proj-url">
                    <a href={props.url} target="_blank" rel="noopener noreferrer">
                      {props.url}
                    </a>
                  </div>
                }

              </span>
          
          return <span>{props.title}</span>;
        });
        
        return <div>
            <ul className="list">
            {data.map((item, i) => {
              return <li key={i}>
                <p>
                  <FaCheck style={{ marginRight: '12px' }} />
                  {getTitle(item)}
                  { item.technoligies && <ImageView data={item.technoligies} label={'Technologies'}/> }
                </p>
                <Divider />
              </li>
            })}
            </ul>
        </div>
    }
}

export default DataView;