import React, { Component } from 'react';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: "",
            gender: "male"
        }
    }

    handleChange = (e) => {
        console.log(e.target.name);
        this.setState({
            [e.target.name]: e.target.value
        });

    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target);
        fetch('http://todoapp.ahmedrohym.com/api.php?apicall=signup', {
            method: 'POST',
            body: JSON.stringify(this.state)
          })
        .then(response => response.json())
        .then(res => console.log(res));
    }

    render() {
        const { username, email, password, gender } = this.state;

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
                                <label>Email: </label>
                            </div>
                            <div className="col d-flex justify-content-start">
                                <input name="email" value={email} onChange={this.handleChange} type="email" placeholder="hagar@gmail.com" /><br />
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
                            <select name="gender" value={gender} onChange={this.handleChange}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="row justify-content-center">
                            <button type="submit" className="btn btn-primary" name="signup">Sign Up</button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default SignUp;