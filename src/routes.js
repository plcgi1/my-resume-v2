import React from 'react';
import { Router } from 'react-router';
import { IndexRoute } from 'react-router';
import { Route } from 'react-router';
import { browserHistory } from 'react-router';
import { withRouter } from 'react-router';
import AppLayout from './containers';

import Expirience from './containers/expirience';
import Contacts from './containers/contacts';
import Hobbies from './containers/hobbies';
import Root from './containers/root';

class Routes extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                {/* public */}
                <Route path="/" component={props => <AppLayout {...props}/>}>
                    <IndexRoute component={props => <Root {...props}/>}/>}/>

                    <Route path="expirience"
                           component={props => <Expirience {...props}/>}/>
                    <Route path="hobbies"
                           component={props => <Hobbies {...props}/>}/>
                    <Route path="contacts"
                           component={props => <Contacts {...props}/>}/>
                </Route>
            </Router>
        );
    }
}
/*TODO
 * 1 Добавить notfound
 * */
export default withRouter(Routes);