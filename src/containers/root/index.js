import React from 'react';
import {Link} from 'react-router';
import { CSSTransitionGroup } from 'react-transition-group';
import * as pages from '../../services/pages';
import {refresh} from '../../utils';
import './index.scss';

class Root extends React.Component {
    state = { pages: [], fetching: false, label: '' };
 
    list (lang) {
        this.setState({ fetching: true });
    
        pages.list(lang)
            .then((response) => {
                this.setState({ pages: response.data.data, label: response.data.label, fetching: false });
            })
            .catch((err) => {
                this.setState({ fetching: false });
            });
    }
    
    componentWillReceiveProps(nextProps) {
        refresh(this, nextProps, this.list.bind(this));
    }
    
    componentDidMount(){
        this.list(this.props.lang);
    }
    
    render() {
        const { pages, label } = this.state;
        
        //if(pages.length === 0) return <Spin/>;
        
        return <CSSTransitionGroup
          transitionName="rootTransition"
          transitionAppear={true}
          transitionAppearTimeout={800}
          transitionEnter={false}
          transitionLeave={false}
        >
          <div className="root">
              <div className="my-avatar">
                  <img src="/images/avatars/my-ava.png" title={label} alt={ label }/>
              </div>
              <div className="grid">
                  {pages.map((row, i) => (
                      <div className="grid-item nav" key={i}>
                          <Link to={row.path} key={row.id}>{row.title}</Link>
                      </div>
                  ))}
              </div>
            
          </div>
        </CSSTransitionGroup>
    }
}

export default Root;