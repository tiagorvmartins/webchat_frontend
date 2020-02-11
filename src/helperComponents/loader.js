import React from 'react';
import './loader.css';
import { connect } from 'react-redux';

class Loader extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props);
        return (
            this.props.isLoading ? <div className="loader"></div> : null
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.commonReducer.isLoading
    };
}


export default connect(mapStateToProps)(Loader);