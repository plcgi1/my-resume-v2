import React from 'react';

class HobbiesDataView extends React.Component {
  render() {
    const {data} = this.props;
    
    const getTitle = ((props) => {
      if (props.url)
        return <a href={props.url} target="_blank">
          <img src={props.image} alt={props.description}/>
          {props.description}
        </a>
      
      return <span><img src={props.image} alt={props.description}/>{props.description}</span>;
    });
    
    if(data && data.length > 0)
      return <div className="hobby-list">
        <ul>
          {data.map((item, i) => {
            return <li key={i}>
              
              <h3>{getTitle(item)}</h3>
              
            </li>
          })}
        </ul>
      </div>
    
    return null;
  }
}

export default HobbiesDataView;