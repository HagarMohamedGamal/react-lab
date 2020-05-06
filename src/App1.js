import React from 'react';
import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: 0};
  }

  IncrementValue=(e)=>{
    console.log(this.state.value+1);
    this.setState({value: this.state.value+1});
    
  }

  render(){
    return (
      <div className="App">
        <button onClick={this.IncrementValue}>
          <span>
            Increment
          </span>
        </button>
        <p>
          {this.state.value}
        </p>
      </div>
    );
  }
}


export default App;
