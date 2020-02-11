import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/store';


import PrivateRoute from './helpers/PrivateRoute';
import Loader from './helperComponents/loader'

import App from './app';
// import { 
//     BrowserRouter as Router,
//     Switch,
//     Route } from 'react-router-dom';

// class Index extends React.Component {

//     render(){
//         return (
//             <Provider store={store}>
//                 <Router>                
//                     <Switch>
//                         <PrivateRoute component={Chat} exact path="/" />
//                         <PrivateRoute component={Chat} exact path="/chat" />                    
//                         <Route exact path="/login">
//                             <Login />
//                         </Route>
//                         <Route exact path="/register">
//                             <Register />
//                         </Route>                                    
//                     </Switch>
//                     <Loader />
//                 </Router>
//             </Provider>
            
//         );
//     }
// }

class Index extends React.Component {

    render(){        
        return (
            <Provider store={store}>
                <App />
                <Loader />                
            </Provider>
        );
    }
}



ReactDOM.render(<Index />, document.getElementById('root'));

