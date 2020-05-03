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
  Link
} from "react-router-dom";


class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
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
                <SignIn />
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



export default App;
