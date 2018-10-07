import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  './index.scss';
import {Affix} from 'antd';

class LangSelector extends Component {
    render() {
        const {lang, onToggle} = this.props;
        
        const getClassName = (selected) => {
            return selected === lang ? 'selected' : '';
        };
        
        return (<Affix>
          
            <div className="lang-selector" key={lang}>
                <span onClick={onToggle('en')} className={getClassName('en')}>
                    <img src="/images/lang/usa-32.png" alt="EN"/>
                </span>
                <span onClick={onToggle('ru')} className={getClassName('ru')}>
                    <img src="/images/lang/russian-32.png" alt="EN"/>
                </span>
            </div>
            </Affix>
        );
    }
}

LangSelector.propTypes = {
    lang: PropTypes.string.isRequired,
    onToggle: PropTypes.func.isRequired
}

export default LangSelector;