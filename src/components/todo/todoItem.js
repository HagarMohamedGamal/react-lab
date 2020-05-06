import React from 'react';

class TodoItem extends React.Component{
    state={isChecked: false};
    handleOk=()=>{
        if(!this.state.isChecked){
            // this.state.isChecked=true;
            this.setState({isChecked: true});
            console.log(this.state.isChecked);
        }
        else{
            this.setState({isChecked: false});
        }
    }

    handleNot=()=>{
        this.setState({isChecked: false});
        this.props.removeItem(this.props.index);
    }

  render() {
      return <div>
                <li className={this.state.isChecked?'list-group-item border-danger my-1 bg-info':'list-group-item border-danger my-1 '}>
                    <div className="d-flex justify-content-between">
                        <div className={this.state.isChecked?"text-white":""}>{this.props.itemData}</div>
                        <div>
                            <button type="button" className="btn mx-1 btn-outline-dark mb-1" onClick={this.handleOk}> &#9989; </button>
                            <button type="button" className="btn mx-1 btn-outline-danger" onClick={this.handleNot}> &#x2718; </button>
                        </div>
                    </div>
                </li>
          </div>;
  }
}
export default TodoItem;
