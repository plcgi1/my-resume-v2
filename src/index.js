import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import {unregister} from './registerServiceWorker';

ReactDOM.render(<div><Routes/></div>, document.getElementById('root'));

unregister();
