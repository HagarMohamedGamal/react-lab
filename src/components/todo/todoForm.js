import React from 'react';

class TodoForm extends React.Component{
    state = {value: ""};
    inputValue=(e)=>{
        this.setState({value: e.target.value});
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        if(this.state.value != ""){
            this.props.allItems.push(this.state.value);
            this.props.addItem(this.props.allItems);
            this.setState({value: ""});
        }
    }
    render() {
        return (
            <form className="form-inline my-3" onSubmit={this.handleSubmit}>
              <div className="form-group mb-2 mr-3">
                <label className="font-weight-bold">Name </label>
              </div>
              <div className="form-group mb-2">
                    <input className="form-control" value={this.state.value} type="text" onChange={this.inputValue} placeholder="Enter Item" />
              </div>
                <input type="submit" value="Submit" className="btn btn-primary mb-2"/>
            </form>
        );
    }
  }
  export default TodoForm;