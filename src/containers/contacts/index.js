import React from 'react';
import MySpin from '../../components/my-spin';
import * as dataProvider from '../../services/data';
import './index.scss';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaCheck} from 'react-icons/fa';
import {refresh} from "../../utils";

class Contacts extends React.Component {
    state = { data: [], fetching: false };
    constructor(props) {
        super(props);
        this.list.bind(this);
    }
    
    list(lang) {
        return dataProvider.list('contacts', lang)
            .then((response) => {
                this.setState({ data: response.data.data, fetching: false });
            })
            .catch((err) => {
                this.setState({ fetching: false });
            });
    }
    
    componentWillReceiveProps(nextProps) {
        refresh(this, nextProps, this.list.bind(this));
    }
    
    componentDidMount(){
        this.setState({ fetching: true });
        
        this.list(this.props.lang);
    }
    
    getPosition(index) {
        if(index===0) return 'left';
        
        if(index===1) return 'right';
        
        if((index % 2) > 0) return 'right';
        
        return 'left';
    }
    
    getIcon(row) {
        return <FaCheck/>;
    }
  
  getValue(item) {
        if(item.url)
            return <a href={item.url} target="_blank">{item.value}</a>
        
        return item.value;
    }
    
    render() {
        const {data} = this.state;
        
        if(data.length === 0) return <MySpin/>;
        
        return <div className="contacts">
            <VerticalTimeline>
                {data.map((row, i) => (
                    <VerticalTimelineElement
                        position={this.getPosition(i)}
                        key={i}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={this.getIcon(row)}
                    >
                        <h4 className="vertical-timeline-element-subtitle">
                          {row.title} : <span style={{ float: 'right' }}>{ this.getValue(row) }</span>
                        </h4>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    }
}

export default Contacts;