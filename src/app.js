import React from 'react';
import Login from './login';
import Register from './register';
import Chat from './chat'; 
import { connect } from 'react-redux';

class App extends React.Component {

    render(){
        const elementsToRender = [];
        switch(this.props.pageToShow){
            case 'Register':
                elementsToRender.push(<Register key="Register"/>);
                break;
            case 'Login':
                elementsToRender.push(<Login key="Login" />);
                break;
            case 'Chat':
                elementsToRender.push(<Chat key="Chat" />);
                break;
        }
    
        console.log(elementsToRender);
        return (
            <div id="app">
                {elementsToRender}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        pageToShow: state.routesReducer
    };
}

export default connect(mapStateToProps)(App);