import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><Routes/></div>, document.getElementById('root'));

registerServiceWorker();
