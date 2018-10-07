import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  './index.scss';
import {Affix} from 'antd';
import CloseMe from '../close-me';
import LangSelector from '../lang-selector';

class MyAffix extends Component {
  render() {
    const {lang, onToggle, pathname} = this.props;
    
    return (<Affix>
        <LangSelector lang={lang} onToggle={onToggle}/>
        { pathname !== '/' ? <CloseMe/> : null }
      </Affix>
    );
  }
}

LangSelector.propTypes = {
  lang: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired
}

export default MyAffix;