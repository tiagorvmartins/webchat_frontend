import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function isAuthenticated(){
    return false;
}


class PrivateRoute extends React.Component {
    render() {
       const {component: Component, ...rest} = this.props;

       return (
           <Route {...rest} render={props => (
               isAuthenticated() ? ( 
                 <Component {...props}/>
           ) : (
            <Redirect to='/login'/>
           )
         )}/>
       );
    }
}


export default PrivateRoute;
