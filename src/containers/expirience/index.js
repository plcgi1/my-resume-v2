import React from 'react';
import MySpin from '../../components/my-spin';
import * as dataProvider from '../../services/data';
import DataView from './data-view';
import ImageView from './image-view';
import { CSSTransitionGroup } from 'react-transition-group';
import './index.scss';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaCheck} from 'react-icons/fa';
import {FaGraduationCap} from 'react-icons/fa';
import {refresh} from "../../utils";

class Expirience extends React.Component {
    state = { data: [], label: '', fetching: false };
    constructor(props) {
        super(props);
        this.list.bind(this);
    }
    
    list(lang) {
        let res = [];
    
        return dataProvider.list('expirience', lang)
            .then((response) => {
                res = response.data.data;
                
                this.setState({ label: response.data.technologies });
                
                return dataProvider.list('education', lang)
            })
            .then((response) => {
                res.push(response.data.data[0]);
            
                this.setState({ data: res, fetching: false });
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
    
    getDateString(row) {
        return row.start_date  + ' - ' + row.end_date
    }
    
    getClassName(row) {
        if(row.type && row.type === 'education')
            return 'vertical-timeline-element--education';
        return 'vertical-timeline-element--work';
    }
    
    getPosition(index) {
        if(index===0) return 'left';
        
        if(index===1) return 'right';
        
        if((index % 2) > 0) return 'right';
        
        return 'left';
    }
    
    getTitle(item) {
        if(item.url)
            return <a target="_blank" rel="noopener noreferrer" href={item.url}>{item.company}</a>
        
        return item.company;
    }
    
    getIcon(row) {
        if(row.type && row.type === 'education') return <FaGraduationCap/>;
        
        return <FaCheck/>;
    }
    
    render() {
        const {data, label} = this.state;
    
        if(data.length === 0) return <MySpin/>;
        
        return <CSSTransitionGroup
            transitionName="rootTransition"
            transitionAppear={true}
            transitionAppearTimeout={800}
            transitionEnter={false}
            transitionLeave={false}
          >
          <div className="expirience">
            <VerticalTimeline>
                {data.map((row, i) => (
                    <VerticalTimelineElement
                        className={this.getClassName(row)}
                        date={this.getDateString(row)}
                        position={this.getPosition(i)}
                        key={i}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={this.getIcon(row)}
                    >
                        <h3 className="vertical-timeline-element-title">
                          { this.getTitle(row) }
                          
                        </h3>
                        <h3 className="vertical-timeline-element-subtitle">{ row.role }</h3>
                        
                        <DataView data={row.tasks} parent={row}/>
                        <ImageView data={row.technologies} label={label}/>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
          </div>
          </CSSTransitionGroup>
    }
}

export default Expirience;