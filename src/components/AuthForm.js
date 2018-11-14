import React, { Component } from 'react';

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: ""
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const authType = this.props.signUp ? 'signup' : 'signin';
        this.props.onAuth(authType, this.state)
        .then(() => {
            this.props.history.push('/');
        })
        .catch(() => {
            return;
        });
    };

    render(){
        const { email, username, password } = this.state;
        const { heading, buttonText, signUp, errors, history, removeError } = this.props;

    // listen to change in route before returning
    history.listen(() => {
        removeError();
    });

    {errors.message && (
        <div className="alert alert-danger">
            {errors.message}
        </div>
    )}


        return(
            <div id="auth-form" className="container">
                <div className="row justify-content-md-center text-center">
                    <div className="col-md-6 container">
                        <form onSubmit={this.handleSubmit}>
                            <h2>{heading}</h2>
                            {errors.message && (
                                <div className="alert alert-danger">
                                    {errors.message}
                                </div>
                            )}
                            <label htmlFor="email">Email:</label>
                            <input 
                                className="form-control" name="email" 
                                onChange={this.handleChange} value={email} 
                                id="email" 
                                type="text" 
                            />
                            <label htmlFor="password">Password:</label>
                            <input 
                                className="form-control" name="password" 
                                onChange={this.handleChange}
                                id="password" 
                                type="password" 
                            />
                            {signUp && (
                                <div>
                                    <label htmlFor="username">Username:</label>
                                    <input 
                                        className="form-control" name="username" 
                                        onChange={this.handleChange} value={username} 
                                        id="username" 
                                        type="text" 
                                    />
                                </div>
                            )}
                            <button type="submit" className="btn btn-block" style={{ 'backgroundColor': '#af473c', 'color': '#f7f7f7'}}>
                                {buttonText}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AuthForm;