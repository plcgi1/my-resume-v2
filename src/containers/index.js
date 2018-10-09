import React from 'react';
import MyAffix from '../components/affix';
import './index.scss';

class AppLayout extends React.Component {
    constructor(props) {
        super(props);
        
        const userLang = navigator.language || navigator.userLanguage;
        
        const arr = userLang.split('-');
        
        if (/en|ru/.test(arr[0])) {
          this.state = { lang: arr[0] };
        }
        else {
          this.state = { lang: 'en' };
        }
    }
    
    toggleLang (lang) {
        return () => {
            this.setState({ lang: lang });
        };
    }
    
    render() {
        const {lang} = this.state;
        
        return <div>
          <MyAffix onToggle={this.toggleLang.bind(this)} lang={lang} key={lang} pathname={this.props.location.pathname}/>
            { React.Children.map(this.props.children, child => React.cloneElement(child, {lang: lang})) }
          
        </div>
    }
}

export default AppLayout;