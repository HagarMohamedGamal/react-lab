import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target);
        fetch('http://todoapp.ahmedrohym.com/api.php?apicall=login', {
            method: 'POST',
            body: JSON.stringify(this.state)
          })
        .then(response => response.json())
        .then(res => {
            console.log(res);
            if(res.message=="Login successfull"){
                localStorage.setItem('name', res.user.username);
                this.props.logIn();
            }
        })
        .catch((err) => console.log(err));
    }

    render() {
        const { username, password } = this.state;
        if(this.props.loginState){
            return <Redirect to='/' />;
        } else{
        return (
            <>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col d-flex justify-content-end">
                                <label>UserName: </label>
                            </div>
                            <div className="col d-flex justify-content-start">
                                <input name="username" value={username} onChange={this.handleChange} type="text" placeholder="hagar" /><br />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-end">
                                <label>Password: </label>
                            </div>
                            <div className="col d-flex justify-content-start">
                                <input name="password" value={password} onChange={this.handleChange} type="password" placeholder="******" /><br />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <button type="submit" className="btn btn-primary" name="signin">Sign In</button>
                        </div>
                    </form>
                </div>
            </>
        );
            
    }
    }
}

export default SignIn;