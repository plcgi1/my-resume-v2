import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaCheck} from 'react-icons/fa';
import { CSSTransitionGroup } from 'react-transition-group';
import MySpin from '../../components/my-spin';
import * as dataProvider from '../../services/data';
import './index.scss';
import {refresh} from '../../utils';
import HobbiesDataView from './data-view';

class Hobbies extends React.Component {
    state = { data: [], 'tobecontinue': '', fetching: false, visible: false };
    
    getIcon(row) {
        return <FaCheck/>;
    }
    
    list(lang) {
        return dataProvider.list('hobbies', lang)
            .then((response) => {
                this.setState({ data: response.data.data, tobecontinue: response.data.tobecontinue, fetching: false });
            })
            .catch((err) => {
                this.setState({ fetching: false });
            });
    }
    
    onClose() {
        this.setState({
            visible: false,
        });
    }
    
    componentWillReceiveProps(nextProps) {
        refresh(this, nextProps, this.list.bind(this));
    }
    
    componentDidMount(){
        this.setState({ fetching: true });
    
        this.list(this.props.lang);
    }
  
  getTitle(item) {
    if(item.url)
      return <a target="_blank" rel="noopener noreferrer" href={item.url}>{item.title}</a>
    
    return item.title;
  }
    
    render() {
        const {data, tobecontinue} = this.state;
       
        if(data.length === 0) return <MySpin/>;
        
        return <CSSTransitionGroup
            transitionName="rootTransition"
            transitionAppear={true}
            transitionAppearTimeout={800}
            transitionEnter={false}
            transitionLeave={false}
          >
          <div className="hobbies">
            <VerticalTimeline>
            {data.map((row, i) => (
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date=""
                    key={i}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={this.getIcon(row)}>
                    <h3 className="vertical-timeline-element-title">{ this. getTitle(row) }</h3>
                  <HobbiesDataView data={row.tasks}/>
                  <div className="vertical-timeline-element-subtitle">{tobecontinue}</div>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
          </div>
        </CSSTransitionGroup>
    }
}

export default Hobbies;
