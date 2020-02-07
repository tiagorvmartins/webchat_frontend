import React from 'react';
import ReactDOM from 'react-dom';

import Login from './login.js';
import Register from './register.js';
import Chat from './chat.js'; 

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
                    <Route exact path="/">
                        <Login />
                    </Route>

                    <Route path="/login">
                        <Login />
                    </Route>

                    <Route path="/register">
                        <Register />
                    </Route>
                    
                    <Route path="/chat">
                        <Chat />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));

