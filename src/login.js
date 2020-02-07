import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
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
        return (<div id="login" className="vertical_center">                
                    <div className="container">
                        <div id="login-row" className="row justify-content-center align-items-center">
                            <div id="login-column" className="col-md-6">
                                <div id="login-box" className="col-md-12">
                                    <form id="login-form" className="form" onSubmit={this.handleLoginSubmit}>
                                        <h3 className="text-center text-info">Login</h3>
                                        <div className="form-group">
                                            <label htmlFor="username" className="text-info">Username:</label><br/>
                                            <input type="text" value={this.state.username} onChange={this.handleInputChange} name="username"  id="username" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="text-info">Password:</label><br/>
                                            <input type="text" value={this.state.password} onChange={this.handleInputChange} name="password" id="password" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="remember-me" className="text-info">
                                                <span>Remember me</span> 
                                                <span>
                                                    <input id="remember-me" name="remember-me" type="checkbox"/>
                                                </span>
                                            </label>
                                            <br/>
                                            <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" />
                                        </div>
                                        <div id="register-link" className="text-right">                                
                                            <Link className="text-info" to="/register">Register here</Link>                                                        
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>);
    }
}

export default Login;