import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            secondpassword:''
        }

        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleLoginSubmit(event){
        event.preventDefault();
    }

    handleInputChange(event){
        const name = event.target.name;        
        this.setState({
            [name]: event.target.value
        });
    }

    render () {
        return (<div id="register" className="vertical_center">                
                    <div className="container">
                        <div id="register-row" className="row justify-content-center align-items-center">
                            <div id="register-column" className="col-md-6">
                                <div id="register-box" className="col-md-12">
                                    <form id="register-form" className="form" onSubmit={this.handleLoginSubmit}>
                                        <h3 className="text-center text-info">Register</h3>
                                        <div className="form-group">
                                            <label htmlFor="username" className="text-info">Username:</label><br/>
                                            <input type="text" value={this.state.username} onChange={this.handleInputChange} name="username"  id="username" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="text-info">Password:</label><br/>
                                            <input type="text" value={this.state.password} onChange={this.handleInputChange} name="password" id="password" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="secondpassword" className="text-info">Confirm Password:</label><br/>
                                            <input type="text" value={this.state.secondpassword} onChange={this.handleInputChange} name="secondpassword" id="password" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            
                                            <br/>
                                            <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" />
                                        </div>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>);
    }
}

export default Register;