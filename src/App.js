import React from 'react';
import logo from './logo.svg';
// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/authentication/SignUp';
import SignIn from './components/authentication/SignIn';
import TodoContainer from './components/todo/todoContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    }
  }

  logIn = () => {
    console.log(this.state);
    if (this.state.loggedIn == true) {
      localStorage.removeItem("name")
      this.setState({ loggedIn: false })
    }
    else {
      this.setState({ loggedIn: true })
    }
  }


  render() {
    if (!localStorage.getItem("name"))
      return (
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/signup">SignUp</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/login">
                <SignIn logIn={this.logIn} loginState={this.state.loggedIn} />
              </Route>
              <Route path="/">
                <Redirect to='/login' />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    else {
      return (
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  {localStorage.getItem("name")}
                </li>
                <li>
                  <Link to="/logout" onClick={this.logIn}>Logout</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/logout">
                <Redirect to='/' />
              </Route>
              <Route path="/">
                <TodoContainer />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }
  }
}



export default App;
