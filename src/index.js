import React from 'react';
import ReactDOM from 'react-dom';

import Login from './login';
import Register from './register';
import Chat from './chat'; 
import PrivateRoute from './helpers/PrivateRoute';

import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link } from 'react-router-dom';

class Index extends React.Component {

    render(){
        return (
            <Router>                
                <Switch>
                    <PrivateRoute component={Chat} exact path="/" />
                    <PrivateRoute component={Chat} exact path="/chat" />                    
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>                                    
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));

